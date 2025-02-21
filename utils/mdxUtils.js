import fs from "fs/promises"; // Utiliser fs/promises pour les fonctions asynchrones
import path from "path";
import matter from "gray-matter";

export async function getMdxData(folderPath) {
	const absolutePath = path.join(process.cwd(), folderPath);
	const files = await fs.readdir(absolutePath); // Lecture asynchrone des fichiers

	const dataPromises = files
		.filter((file) => !file.startsWith(".")) // Exclure les fichiers qui commencent par un point (comme .DS_Store)
		.map(async (filename) => {
			try {
				const filePath = path.join(absolutePath, filename);
				const fileContent = await fs.readFile(filePath, "utf-8"); // Lecture asynchrone du fichier
				const { data } = matter(fileContent);

				return {
					...data,
					slug: filename.replace(".mdx", ""),
				};
			} catch (error) {
				console.error(`Erreur dans le fichier MDX: ${filename}`, error);
				return null; // Ignore le fichier erroné
			}
		});

	// Résoudre toutes les promesses
	const data = await Promise.all(dataPromises);

	// Filtrer les fichiers non valides (null)
	return data.filter(Boolean);
}

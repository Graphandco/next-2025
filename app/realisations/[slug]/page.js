import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";

export default async function Page({ params }) {
	const slug = params.slug;

	// 📌 Charger le fichier MDX
	const filePath = path.join(
		process.cwd(),
		"markdown/realisations",
		`${slug}.mdx`
	);
	const fileContent = fs.readFileSync(filePath, "utf-8");

	// 📌 Extraire les métadonnées et le contenu MDX
	const { data: frontmatter, content } = matter(fileContent);
	const mdxSource = await serialize(content);

	return (
		<div id={slug}>
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<MDXRenderer source={mdxSource} />
			</div>
		</div>
	);
}

export function generateStaticParams() {
	return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = true;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default async function Page({ params }) {
	const { slug } = params;

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
				<div>
					<Link
						className="flex gap-2 justify-end items-center group text-white hover:text-primary"
						href="/realisations"
					>
						<IoArrowBackCircleOutline className="text-size-h3 group-hover:rotate-45 group-hover:scale-110 transition-all" />
						<span>Retour aux réalisations</span>
					</Link>
				</div>

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

import { getMdxData } from "@/utils/mdxUtils";
import Link from "next/link";

export default async function Realisations() {
	const data = await getMdxData("markdown/realisations");

	return (
		<section className="wrapper">
			<h1>Nos Réalisations</h1>
			<ul>
				{data.map((item) => (
					<li key={item.slug}>
						<Link href={`realisations/${item.slug}`}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

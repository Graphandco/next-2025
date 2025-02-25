import { getMdxData } from "@/utils/mdxUtils";
import RealisationItem from "./RealisationItem";
import RealisationsText from "@/markdown/realisations.mdx";
import MagnetButton from "@/components/ui/MagnetButton";
import Reveal from "@/components/ui/Reveal";

export default async function Realisations() {
	const data = await getMdxData("markdown/realisations");

	return (
		<section className="realisations">
			<div className="wrapper">
				<Reveal>
					<h1>Nos Réalisations</h1>
				</Reveal>
				<div className="grid md:grid-cols-[1fr_380px] item-center gap-7 my-6">
					<div className="markdown">
						<RealisationsText />
					</div>
					<div className="grid content-center gap-4 justify-center bg-black/20 rounded-lg p-7">
						<span className="text-accent text-center">
							Envie d'échanger sur votre projet ?
						</span>
						<div className="flex justify-center">
							<MagnetButton
								title="Contactez-nous"
								link="/contact"
							/>
						</div>
					</div>
				</div>
			</div>
			<ul className="realisations__list pt-9">
				{data.map((item) => (
					<RealisationItem key={item.slug} item={item} />
				))}
			</ul>
		</section>
	);
}

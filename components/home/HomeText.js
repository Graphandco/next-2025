import HomeContent from "@/markdown/homeContent.mdx";
import MagnetButton from "../ui/MagnetButton";
import { twMerge } from "tailwind-merge";

const HomeText = () => {
	return (
		<section className="wrapper py-16 markdown grid gap-10">
			<div className="columns-1 md:columns-2  column ">
				<HomeContent />
			</div>
			<MagnetButton title="Nous contacter" href="/contact" />
		</section>
	);
};

export default HomeText;

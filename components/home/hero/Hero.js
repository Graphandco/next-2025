"use client";
import MagnetButton from "@/components/ui/MagnetButton";
import Reveal from "@/components/ui/Reveal";
import LottieRocket from "@/components/lottie/LottieRocket";
import { useHeaderHeight } from "@/context/HeaderHeightContext";

const Hero = () => {
	const { headerHeight } = useHeaderHeight();
	return (
		<section
			className="hero flex items-center py-10"
			id="hero"
			style={{ minHeight: `calc(100dvh - ${headerHeight}px)` }}
		>
			<div className="wrapper grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1.5fr_1fr] gap-6 md:gap-12">
				<div className="grid gap-7 content-center">
					<Reveal>
						<div className="text-white uppercase">
							Un métier, une passion
						</div>
					</Reveal>
					<Reveal className="my-24">
						<h1 className="text-size-h1 font-title gradient-text ">
							Création de sites web
						</h1>
					</Reveal>
					<Reveal>
						<div className="">
							Nous sommes spécialisés dans la réalisation de sites
							web. Moderne et intuitif, votre site sera un
							puissant levier pour accroitre la vitalité de votre
							entreprise.
						</div>
					</Reveal>
					<Reveal>
						<MagnetButton
							title="Voir nos prestations"
							link="/prestations"
						/>
					</Reveal>
				</div>
				<div className="m-auto w-full max-w-48 md:max-w-72">
					<LottieRocket />
				</div>
			</div>
		</section>
	);
};

export default Hero;

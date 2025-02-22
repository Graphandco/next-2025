"use client";
import MagnetButton from "@/components/ui/MagnetButton";
import Reveal from "@/components/ui/Reveal";
import LottieRocket from "@/lottie/LottieRocket";
import { useHeaderHeight } from "@/context/HeaderHeightContext";

const Hero = () => {
	const { headerHeight } = useHeaderHeight();
	return (
		<section
			className="hero flex items-center"
			id="hero"
			style={{ minHeight: `calc(100dvh - ${headerHeight}px)` }}
		>
			<div className="wrapper grid sm:grid-cols-[1.5fr_1fr]">
				<div className="grid gap-5 content-center">
					<Reveal className="my-24">
						<h1 className="text-size-h1 font-title gradient-text ">
							Création de sites web
						</h1>
					</Reveal>
					<Reveal>
						<div className="text-accent">
							Nous sommes spécialisés dans la réalisation de sites
							web. Moderne et intuitif, votre site sera un
							puissant levier pour accroitre la vitalité de votre
							entreprise.
						</div>
					</Reveal>
					<Reveal>
						<MagnetButton title="Click here" />
					</Reveal>
				</div>
				<div className="max-w-72">
					<LottieRocket />
				</div>
			</div>
		</section>
	);
};

export default Hero;

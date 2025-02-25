import Image from "next/image";
import Link from "next/link";
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import MagnetElement from "../ui/MagnetElement";

const Footer = () => {
	const contacts = [
		{
			title: "Nous appeler",
			link: "tel:0661619998",
			linkValue: "06 61 61 99 98",
			content: "par téléphone",
			icon: <FaMobileAlt />,
		},
		{
			title: "Nous écrire",
			link: "mailto:contact@graphandco.com",
			linkValue: "contact@graphandco.com",
			content: "par mail",
			icon: <FaEnvelope />,
		},
		{
			title: "Nous trouver",
			content: "1, rue de la Lucelle </br>68127 Sainte-Croix-en-Plaine",
			icon: <FaMapMarkerAlt />,
		},
	];
	return (
		<footer className="bg-bgbody bg-fixed bg-cover sticky bottom-0 isolate after:content-[''] after:absolute after:inset-0 after:bg-black/20 after:-z-10">
			<div className="wrapper text-center p-8 grid gap-y-10 gap-x-5 sm:gap-y-5 sm:gap-x-10 sm:grid-cols-2 lg:grid-cols-4 text-size-small font-bold leading-6">
				{contacts.map((contact, index) => (
					<div
						className="flex flex-col gap-3 sm:gap-6 justify-between items-center"
						key={index}
					>
						<div className="text-accent text-size-h6 font-bold uppercase font-title">
							{contact.title}
						</div>
						<MagnetElement>
							{contact.link && contact.linkValue ? (
								<a
									className="flex justify-center p-4 border-2 border-primary text-white rounded-sm"
									href={contact.link}
								>
									{contact.icon}
								</a>
							) : (
								<span className="flex justify-center p-4 border-2 border-primary text-white rounded-sm">
									{contact.icon}
								</span>
							)}
						</MagnetElement>
						<div className="">
							<div
								dangerouslySetInnerHTML={{
									__html: contact.content,
								}}
							/>

							{contact.link && contact.linkValue && (
								<a
									className="text-white hover:text-primary transition-colors"
									href={contact.link}
								>
									{contact.linkValue}
								</a>
							)}
						</div>
					</div>
				))}
				<div className="flex flex-col gap-6 justify-between items-center">
					<div className="text-accent text-size-h6 font-bold uppercase font-title">
						Liens
					</div>
					<nav>
						<ul>
							<li className="text-white hover:text-primary transition-colors">
								<Link href="/mentions-legales">
									Mentions légales
								</Link>
							</li>
							<li className="text-white hover:text-primary transition-colors">
								<Link href="/politique-confidentialite">
									Politique de confidentialité
								</Link>
							</li>
						</ul>
					</nav>
					<div className="flex items-center gap-2">
						<Image
							src="/logo.svg"
							alt="Site Logo"
							width={25}
							height={25}
						/>
						<span>Graph and Co {new Date().getFullYear()}</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

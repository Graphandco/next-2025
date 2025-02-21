import CountersItem from "./CountersItem";
import { FaSmile, FaCode, FaSadCry } from "react-icons/fa";
import { GiSwordsPower } from "react-icons/gi";

const Counters = () => {
	const counters = [
		{
			number: 97,
			suffix: "%",
			title: "Fidélisation client",
			icon: <FaSmile />,
		},
		{
			number: 15,
			suffix: "",
			title: "Années d'expérience",
			icon: <GiSwordsPower />,
		},
		{
			number: 197436,
			suffix: "",
			title: "Lignes de code",
			icon: <FaCode />,
		},
		{
			number: 12,
			suffix: "",
			title: "Demandes de réparation d'imprimante",
			icon: <FaSadCry />,
		},
	];
	return (
		<section className="realisations bg-white/10" id="realisations">
			<div className="wrapper py-24">
				<div className="grid sm:grid-cols-2 md:grid-cols-4">
					{counters.map((counter, index) => (
						<CountersItem
							key={index}
							icon={counter.icon}
							number={counter.number}
							suffix={counter.suffix}
							title={counter.title}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
export default Counters;

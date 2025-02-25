"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import MagnetElement from "./MagnetElement";

const MagnetButton = ({ title, link, blank, outline, small, ...props }) => {
	return (
		<MagnetElement>
			<button
				className={`group ${
					outline ? "border-2 border-primary" : "bg-primary "
				} relative grid place-content-center rounded-full transition-colors duration-700 ease-out overflow-hidden w-fit`}
				{...props}
			>
				<div className="font-bold relative z-10 ">
					{link?.length ? (
						<Link
							className={`${
								outline ? "text-primary" : "text-black "
							} ${
								small
									? "py-2 px-4 text-size-small"
									: " py-3 px-6 text-size-h6"
							} inline-block uppercase hover:text-black`}
							href={link}
							target={blank ? "blank" : ""}
						>
							{title}
						</Link>
					) : (
						<span
							className={`inline-block text-black uppercase hover:text-black ${
								small
									? "py-2 px-4 text-size-small"
									: " py-3 px-6 text-size-h6"
							}`}
						>
							{title}
						</span>
					)}
				</div>

				<div
					className={`pointer-events-none absolute inset-0 z-0 scale-x-0 scale rounded-full transition-all duration-700 ease-out group-hover:scale-x-100 origin-left ${
						outline ? "bg-primary" : "bg-white"
					}`}
				/>

				<motion.div
					initial={{ rotate: 0 }}
					animate={{ rotate: 360 }}
					transition={{
						duration: 25,
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
					}}
					style={{
						top: "50%",
						left: "50%",
						x: "-50%",
						y: "-50%",
					}}
					width="200"
					height="200"
					className="pointer-events-none absolute z-10"
				>
					{/* <text>
					<textPath
						href="#circlePath"
						fill="black"
						className="fill-black text-xl font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
					>
						You can write whatever text you want around this circle
					</textPath>
				</text> */}
				</motion.div>
			</button>
		</MagnetElement>
	);
};

export default MagnetButton;

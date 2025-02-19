import Link from "next/link";
import Image from "next/image";
import Burger from "../burger/Burger";
import { ThemeSwitcher } from "../ThemeSwitcher";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
	return (
		<div className="wrapper py-4 flex justify-between items-center">
			<Link href="/">
				<Image
					aria-hidden
					src="/logo.svg"
					alt="Logo Graph and Co"
					width={50}
					height={50}
				/>
			</Link>
			<div className="header-menu">
				<HeaderMenu />
				<Burger />
			</div>
		</div>
	);
};

export default Header;

import React from "react";
import { HomeAtouts } from "./home-atouts/HomeAtouts";
import HomeText from "./HomeText";
import Hero from "./hero/Hero";
import HomeRealisations from "./realisations/HomeRealisations";

const Home = () => {
	return (
		<div id="home">
			<Hero />
			<HomeRealisations />
			<HomeAtouts />
			<HomeText />
		</div>
	);
};

export default Home;

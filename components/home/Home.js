import React from "react";
import { HomeAtouts } from "./home-atouts/HomeAtouts";
import HomeText from "./HomeText";
import Hero from "./hero/Hero";
import HomeRealisations from "./realisations/HomeRealisations";
import { Counters } from "./counters/Counters";

const Home = () => {
	return (
		<>
			<Hero />
			<HomeRealisations />
			<HomeAtouts />
			<Counters />
			<HomeText />
		</>
	);
};

export default Home;

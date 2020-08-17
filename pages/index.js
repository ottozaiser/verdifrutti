import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Season from "../components/Season";
import Vegetal from "../components/Vegetal";
import axios from "axios";

export default function Home() {
	const [season, setSeason] = useState();
	function onSeasonChange(seasonIndex) {
		setSeason(seasonIndex);
	}

	const [allVegetables, setAllVegetables] = useState([]);

	useEffect(() => {
		axios
			.get(`/_data/verfru.json`)
			.then((res) => {
				const data = res.data.verfru;
				setAllVegetables(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Head>
				<title>vertempo - frutas y verduras de temporada en Argentina</title>
			</Head>
			<Header />
			<main className="container">
				<Season seasonChange={onSeasonChange} />
				<ul className="veggieGrid">
					{allVegetables
						.sort((a, b) => (a.title > b.title ? 1 : -1))
						.filter((vf) => vf.season.includes(String(season)))
						.map((vf, index) => (
							<li key={index}>
								<Vegetal title={vf.title} content={vf.content} link={vf.link} image={vf.image} season={vf.season} end={vf.end} />
							</li>
						))}
				</ul>
			</main>
			<Footer />
		</div>
	);
}

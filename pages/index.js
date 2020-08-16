import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
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
				<title>vertempo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="container">
				<Season seasonChange={onSeasonChange} />
				<div className="veggieGrid">
					{allVegetables
						.filter((vf) => vf.season.includes(String(season)))
						.map((vf, index) => (
							<Vegetal key={index} title={vf.title} content={vf.content} link={vf.link} image={vf.image} />
						))}
				</div>
			</main>
		</div>
	);
}

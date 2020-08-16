import { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Season from "../components/Season";
import axios from "axios";

export default function Home() {
	const [season, setSeason] = useState();
	function onSeasonChange(seasonIndex) {
		setSeason(seasonIndex);
	}

	const [allVerdFrut, setAllVerdFrut] = useState([]);

	useEffect(() => {
		axios
			.get(`/_data/verfru.json`)
			.then((res) => {
				const data = res.data.verfru;
				setAllVerdFrut(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Head>
				<title>wtf</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<main className="container mx-auto mt-6">
				<Season seasonChange={onSeasonChange} />
				{season}
				{allVerdFrut
					.filter((vf) => vf.season.includes(season))
					.map((vf, index) => (
						<li key={index}>{vf.title}</li>
					))}
			</main>
		</div>
	);
}

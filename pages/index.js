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

				var teta = data.filter((vf) => Object.keys(vf.seasons).some((k) => console.log(vf.seasons[k].season.includes("choto"))));
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Head>
				<title>verdifrutti</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="keywords" content="frutas,verduras,temporada,argentina,estación,legumbres,comida" />
				<meta name="author" content="Otto" />
				<meta property="og:description" content="Frutas y verduras de temporada en Argentina" />
				<meta property="og:url" content="https://verdifrutti.netlify.app/" />
				<meta property="og:site_name" content="verdifrutti" />
				<meta property="og:title" content="verdifrutti" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://verdifrutti.netlify.app/rrss.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ottocapo" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#603cba" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<Header />
			<main className="container">
				<Season seasonChange={onSeasonChange} />
				<div className="veggieGrid">
					{allVegetables
						.sort((a, b) => (a.title > b.title ? 1 : -1))
						// .filter((vf) => vf.seasons.includes(String(season)))
						.filter((vf) => Object.keys(vf.seasons).some((k) => vf.seasons[k].season.includes(String(season))) || season == 4)
						.map((vf, index) => (
							<Vegetal key={index} title={vf.title} link={vf.link} image={vf.image} seasons={vf.seasons} type={vf.type} end={vf.end} />
						))}
				</div>
			</main>
			<Footer />
		</div>
	);
}

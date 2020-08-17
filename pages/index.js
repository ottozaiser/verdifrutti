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
				<html lang="es" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="keywords" content="frutas,verduras,temporada,argentina,estación,legumbres,comida" />
				<meta name="description" property="og:description" content="Frutas y verduras de temporada en Argentina" />
				<meta name="author" content="Otto" />
				<meta property="og:url" content="https://vertempo.netlify.app/" />
				<meta property="og:site_name" content="vertempo" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="vertempo" />
				<meta property="og:image" content="https://vertempo.netlify.app/images/rrss.png"></meta>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ottocapo" />
				<link rel="apple-touch-icon sizes=180x180" href="/images/icons/apple-touch-icon.png" />
				<link rel="icon type=image/png sizes=32x32" href="/images/icons/favicon-32x32.png" />
				<link rel="icon type=image/png sizes=16x16" href="/images/icons/favicon-16x16.png" />
				<link rel="manifest href=/images/icons/site.webmanifest" />
				<link rel="shortcut icon" href="/images/icons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-config " content="/images/icons/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />
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

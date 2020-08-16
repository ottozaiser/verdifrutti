import Head from "next/head";
import Nav from "../components/nav";
export default function Nosotros() {
	return (
		<div>
			<Head>
				<title>Nosotros</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<main className="container mx-auto px-8 mt-5">
				<h1 className="text-4xl text-accent-1">Somos vertempo</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vero? Sint, aperiam illo? Saepe distinctio a rem maxime! Necessitatibus
					dolore ea laboriosam unde, repellendus eos neque repellat illo impedit harum!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vero? Sint, aperiam illo? Saepe distinctio a rem maxime! Necessitatibus
					dolore ea laboriosam unde, repellendus eos neque repellat illo impedit harum!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vero? Sint, aperiam illo? Saepe distinctio a rem maxime! Necessitatibus
					dolore ea laboriosam unde, repellendus eos neque repellat illo impedit harum!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vero? Sint, aperiam illo? Saepe distinctio a rem maxime! Necessitatibus
					dolore ea laboriosam unde, repellendus eos neque repellat illo impedit harum!
				</p>
			</main>
		</div>
	);
}

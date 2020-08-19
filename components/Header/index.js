import Link from "next/link";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="brand">
					<h1>
						🌿 verdifrutti
						{/* <Link href="/">
							<a></a>
						</Link> */}
					</h1>
				</div>
				<div className="tagline">Frutas y verduras de temporada en Argentina</div>
			</div>
		</header>
	);
}

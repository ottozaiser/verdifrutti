import Link from "next/link";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="brand">
					<h1>
						<Link href="/">
							<a>vertempo</a>
						</Link>
					</h1>
				</div>
				<div className="tagline">Frutas y verduras en temporada</div>
			</div>
		</header>
	);
}

import Link from "next/link";

export default function Header() {
	return (
		<header className="header">
			<nav className="nav container">
				<div className="brand">
					<h1>
						<Link href="/">
							<a>vertempo</a>
						</Link>
					</h1>
				</div>
				<ul className="menu">
					<li>
						<Link href="/nosotros">
							<a>Nosotros</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

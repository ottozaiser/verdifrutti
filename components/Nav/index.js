import Link from "next/link";

export default function Nav() {
	return (
		<nav className="bg-green-500 p-8">
			<div className="container mx-auto px-8 flex items-center justify-between flex-wrap ">
				<div className="flex items-center flex-shrink-0 text-white mr-8">
					<h1 className="font-semibold text-xl tracking-tight">vertempo</h1>
				</div>
				<div className="w-full block sm:flex sm:items-center sm:w-auto">
					<div className="text-sm sm:flex-grow">
						<Link href="/">
							<a className="block mt-8 sm:inline-block sm:mt-0 text-green-200 hover:text-white mr-8">Inicio</a>
						</Link>
						<Link href="/nosotros">
							<a className="block mt-8 sm:inline-block sm:mt-0 text-green-200 hover:text-white">Nosotros</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

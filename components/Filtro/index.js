import { useState, useEffect } from "react";

export default function Filtro(props) {
	const type = props.types;
	const todo = "todo";
	useEffect(() => {
		if (props.filtro == todo || props.filtro === undefined) {
			handleClick(todo, type.length);
		}
	});
	function handleClick(y) {
		var t;
		y == todo ? (t = todo) : (t = y);
		props.filterChange(t);
	}
	function reset() {}
	return (
		<div className="filtro">
			<button onClick={() => handleClick(todo)} disabled={props.filtro == todo}>
				Todo
			</button>
			{type.map((x, y) => (
				<button onClick={() => handleClick(type[y])} key={y} disabled={props.filtro == type[y]}>
					{x}
				</button>
			))}
		</div>
	);
}

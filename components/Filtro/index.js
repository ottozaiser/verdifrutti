import { useState, useEffect } from "react";

export default function Filtro(props) {
	const type = props.types;
	const todo = "todo";
	useEffect(() => {
		if (props.filtro == todo || props.filtro === undefined) {
			handleClick(todo, type.length);
		}
	});
	function handleClick(y, i) {
		for (let index = 0; index < type.length + 1; index++) {
			document.getElementById("btn" + index).disabled = null;
		}
		document.getElementById("btn" + i).disabled = "disabled";
		var t;
		y == todo ? (t = todo) : (t = y);
		props.filterChange(t);
	}
	function reset() {}
	return (
		<div className="filtro">
			<button onClick={() => handleClick(todo, type.length)} id={`btn` + type.length}>
				Todo
			</button>
			{type.map((x, y) => (
				<button onClick={() => handleClick(x, y)} id={`btn` + y} key={y}>
					{x}
				</button>
			))}
		</div>
	);
}

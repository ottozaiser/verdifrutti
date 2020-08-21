import { useState, useEffect } from "react";
import * as Constants from "../../constants";

export default function Filtro(props) {
	const vfType = Constants.vfType;
	useEffect(() => {
		handleClick(Constants.vfType.length);
	}, []);
	function handleClick(i) {
		for (let index = 0; index < vfType.length + 1; index++) {
			document.getElementById("btn" + index).disabled = null;
		}
		document.getElementById("btn" + i).disabled = "disabled";
		props.filterChange(i);
	}
	return (
		<div className="filtro">
			<button onClick={() => handleClick(vfType.length)} id={`btn` + vfType.length}>
				Todo
			</button>
			{vfType.map((x, y) => (
				<button onClick={() => handleClick(y)} id={`btn` + y} key={y}>
					{vfType[y]}
				</button>
			))}
		</div>
	);
}

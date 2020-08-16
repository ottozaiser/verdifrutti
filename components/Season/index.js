import { useState, useEffect } from "react";
import Fecha from "./Fecha";

export default function Season(props) {
	const [season, setSeason] = useState();
	const seasonName = ["verano", "otoño", "invierno", "primavera"];

	function checkSeason(cM, cD) {
		var seasonIndex;
		if ((cM == 12 && cD >= 21) || cM < 3 || (cM == 3 && cD <= 20)) {
			seasonIndex = 0;
		}
		if ((cM == 3 && cD >= 21) || (cM > 3 && cM < 6) || (cM == 6 && cD <= 20)) {
			seasonIndex = 1;
		}
		if ((cM == 6 && cD >= 21) || (cM > 6 && cM < 9) || (cM == 9 && cD <= 20)) {
			seasonIndex = 2;
		}
		if ((cM == 9 && cD >= 21) || (cM > 9 && cM < 12) || (cM == 12 && cD <= 20)) {
			seasonIndex = 3;
		}
		setSeason(seasonName[seasonIndex]);
		props.seasonChange(seasonIndex);
	}

	function onChangeDate(month, day) {
		checkSeason(month, day);
	}

	return (
		<div>
			<Fecha changeDate={onChangeDate} />
			<h2 className="temporada">Temporada: {season}</h2>
		</div>
	);
}

import { useState, useEffect } from "react";
import * as Constants from "../../constants";

export default function Season(props) {
	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const [state, setState] = useState({
		day: currentDay,
		month: currentMonth,
		currentSeason: "",
	});
	const [seasonIndex, setSeasonIndex] = useState();
	const seasonName = Constants.seasonName;
	const seasonEmoji = Constants.seasonEmoji;
	function checkSeasonByDate(cM, cD) {
		var index;
		if ((cM == 12 && cD >= 21) || cM < 3 || (cM == 3 && cD <= 20)) {
			index = 0;
		}
		if ((cM == 3 && cD >= 21) || (cM > 3 && cM < 6) || (cM == 6 && cD <= 20)) {
			index = 1;
		}
		if ((cM == 6 && cD >= 21) || (cM > 6 && cM < 9) || (cM == 9 && cD <= 20)) {
			index = 2;
		}
		if ((cM == 9 && cD >= 21) || (cM > 9 && cM < 12) || (cM == 12 && cD <= 20)) {
			index = 3;
		}
		setSeasonIndex(index);
		setState({ currentSeason: index });
		props.seasonChange(index);
	}
	useEffect(() => {
		checkSeasonByDate(state.month, state.day);
	}, []);
	function handleChange(event) {
		setSeasonIndex(event.target.value);
		props.seasonChange(event.target.value);
	}
	return (
		<div className="selectGroup">
			<span className="currently">
				Estás en <span aria-hidden="true">{seasonEmoji[state.currentSeason]}</span> <span class="text">{seasonName[state.currentSeason]}</span>
			</span>
			<select aria-label="Estación" className="seasonSelect" value={String(seasonIndex)} onChange={handleChange}>
				{seasonName.map((x, y) => (
					<option key={y} value={y}>
						{seasonEmoji[y]} {x}
					</option>
				))}
				{/* <option value="4">😎 todo</option> */}
			</select>
		</div>
	);
}

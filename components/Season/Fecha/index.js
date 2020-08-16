import { useState, useEffect } from "react";

export default function Fecha(props) {
	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const [state, setState] = useState({
		day: currentDay,
		month: currentMonth,
	});
	function onChangeDate(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: Number(value),
		});
	}

	useEffect(() => {
		props.changeDate(state.month, state.day);
	}, [state]);

	return (
		<div className="fecha">
			<div className="dia">
				<label htmlFor="dia">Día</label>
				<input aria-label="Día" id="dia" name="day" type="number" min="1" max="31" defaultValue={state.day} onChange={onChangeDate} />
			</div>
			<div className="mes">
				<label htmlFor="mes">Mes</label>
				<input aria-label="Mes" id="mes" name="month" type="number" min="1" max="12" defaultValue={state.month} onChange={onChangeDate} />
			</div>
		</div>
	);
}

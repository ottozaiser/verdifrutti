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
		<div className="flex items-center justify-center">
			<input
				className="appearance-none border rounded text-4xl p-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 text-center"
				aria-label="Día"
				name="day"
				type="number"
				min="1"
				max="31"
				defaultValue={state.day}
				onChange={onChangeDate}
			/>
			<input
				className="appearance-none border rounded text-4xl p-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48 text-center"
				aria-label="Mes"
				name="month"
				type="number"
				min="1"
				max="12"
				defaultValue={state.month}
				onChange={onChangeDate}
			/>
		</div>
	);
}

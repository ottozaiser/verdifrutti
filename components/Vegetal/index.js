import { useState, useEffect } from "react";
import * as Constants from "../../constants";

export default function Vegetal(props) {
	// "season": ["0"],
	const [state, setState] = useState({ flipped: false });
	const seasonName = Constants.seasonName;
	const seasonEmoji = Constants.seasonEmoji;
	const availableSeasons = props.seasons;

	function toggleClass() {
		const currentState = state.flipped;
		setState({ flipped: !currentState });
	}

	useEffect(() => {
		setState({ flipped: false });
	}, [props]);

	const onKeyPress = (e) => {
		const enterOrSpace = e.key === "Enter" || e.key === " " || e.key === "Spacebar" || e.which === 13 || e.which === 32;
		if (enterOrSpace) {
			e.preventDefault();
			toggleClass();
		}
	};
	function havePre(a) {
		switch (a) {
			case "0":
				return "";
			case "1":
				return "principios de ";
			case "2":
				return "fines de ";
			default:
				return "";
		}
	}
	return (
		<div className="card" role="button" onClick={toggleClass} onKeyDown={onKeyPress} tabIndex="0">
			<div className={`card-inner ${state.flipped ? "is-flipped" : ""}`}>
				<div className="card-front">
					<div className="card-image" style={{ backgroundImage: `url('${props.image ? props.image : ""}')` }}></div>
					<div className="card-content">
						<h3 className="card-title">{props.title}</h3>
						<div className="card-temporada">
							{availableSeasons.map((value, index) => (
								<span key={index} className="emoji" key={index} aria-hidden="true">
									{seasonEmoji[availableSeasons[index].season]}
								</span>
							))}
						</div>
					</div>
				</div>
				<div className="card-back" style={{ backgroundImage: `url('${props.image ? props.image : ""}')` }}>
					<div className="card-content">
						<div className="card-header">
							<h3 className="card-title">{props.title}</h3>
							{props.type ? <span className="card-type">{props.type}</span> : null}
						</div>
						<div className="card-temporada">
							{availableSeasons.map((value, index) => (
								<li key={index} className="card-seasons">
									<span className="emoji" aria-hidden="true">
										{seasonEmoji[availableSeasons[index].season]}
									</span>
									<span className="text">
										{havePre(availableSeasons[index].when)}
										{seasonName[availableSeasons[index].season]}
									</span>
								</li>
							))}
							{/* {props.content ? <div className="card-text">{props.content}</div> : null} */}
						</div>
						{/* {props.link ? (
							<a className="card-recipe-btn btn btn-ghost" href={props.link} target="_blank" rel="noopener noreferrer nofollow">
								Recetas<span className="sr-only">con {props.title}</span>
							</a>
						) : null} */}
						{/* <button className="card-flip-btn btn" onClick={toggleClass}>
							Dar vuelta <span className="sr-only">{props.title}</span>
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

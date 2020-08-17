import { useState, useEffect } from "react";
import * as Constants from "../../constants";

export default function Vegetal(props) {
	// "season": ["0"],
	const [state, setState] = useState({ flipped: false });
	const seasonName = Constants.seasonName;
	const seasonEmoji = Constants.seasonEmoji;
	const availableSeason = props.season;

	function toggleClass() {
		const currentState = state.flipped;
		setState({ flipped: !currentState });
	}

	useEffect(() => {
		setState({ flipped: false });
	}, [props]);

	return (
		<div className="card">
			<div className={`card-inner ${state.flipped ? "is-flipped" : ""}`}>
				<div className="card-front" onClick={toggleClass}>
					{props.image ? <img alt="" src={props.image} /> : null}
					<div className="card-content">
						<h3 className="card-title">{props.title}</h3>
						<div className="card-temporada">
							{availableSeason.map((value, index) => (
								<span className="emoji" key={index} aria-hidden="true">
									{seasonEmoji[value]}
								</span>
							))}
						</div>
					</div>
				</div>
				<div className="card-back">
					<div className="card-content">
						<h3 className="card-title">{props.title}</h3>
						<div className="card-temporada">
							<p>Temporada:</p>
							{availableSeason.map((value, index) => (
								<li key={index} className="card-seasons">
									<span className="emoji" aria-hidden="true">
										{seasonEmoji[value]}
									</span>
									<span className="text">
										{props.end ? <span>a fines de </span> : null}
										{seasonName[value]}
									</span>
								</li>
							))}
							{props.content ? <div className="card-text">{props.content}</div> : null}
						</div>
						{props.link ? (
							<a className="card-recipe-btn btn btn-ghost" href={props.link} target="_blank" rel="noopener noreferrer nofollow">
								Recetas en Cookpad<span className="sr-only">con {props.title}</span>
							</a>
						) : null}
						<button className="card-flip-btn btn" onClick={toggleClass}>
							Dar vuelta <span className="sr-only">{props.title}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

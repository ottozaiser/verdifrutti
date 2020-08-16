import { useState, useEffect } from "react";

export default function Vegetal(props) {
	return (
		<div className="card">
			<img alt src={props.image} />
			<div className="content">
				<h3>{props.title}</h3>
				<div>{props.content}</div>
				<a href={props.link}>Receta</a>
			</div>
		</div>
	);
}

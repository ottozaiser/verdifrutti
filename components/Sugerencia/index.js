import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function Sugerencia() {
	const [show, setShow] = useState(false);
	const [send, setSend] = useState(false);
	const [state, setState] = useState("Enviando...");

	const config = {
		formUrl: "https://script.google.com/macros/s/AKfycbyQ8GqFqFQ77cLbebDwEgsJgVeaUffdbIkiaYtIA7lxVg8OFtkX/exec",
	};

	function stateForm(b) {
		var sugerenciaInput = document.getElementById("sugerencia");
		var sugerenciaSubmit = document.getElementById("submit");
		sugerenciaInput.readOnly = String(b);
		sugerenciaInput.disabled = String(b);
		sugerenciaSubmit.disabled = String(b);
	}

	function submitForm(e) {
		e.preventDefault();
		var sugerenciaInput = document.getElementById("sugerencia");
		// stateForm(false);
		setSend(true);

		var form = sugerenciaInput.value;
		var sug = `${encodeURIComponent(form)}`;
		var object = { sugerencia: form };
		var json = JSON.stringify(object);
		axios({
			url: `${config.formUrl}` + "?sugerencia=" + sug,
			method: "get",
			data: json,
			crossDomain: true,
			responseType: "json",
		})
			// .get(config.formUrl)
			.then((res) => {
				// console.log("response", res.data);
				afterEnviado();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function afterEnviado() {
		setState("Enviado. ¡Muchas gracias! ♥");
	}

	function toggle(e) {
		e.preventDefault();
		const currentState = show;
		setShow(!currentState);
		setSend(false);
		setState("Enviando...");
	}
	const inputRef = useRef(null);

	useEffect(() => {
		if (show) {
			inputRef.current.focus();
		}
	}, [show]);

	return (
		<div className="sugerencia">
			<button onClick={toggle} className={"toggleSugerencia btn btn-ghost " + (show ? "opened" : "")}>
				💬 <span className="sr-only">Sugerencias</span>
			</button>
			{show ? (
				<div className="sugeform">
					{send ? (
						<div className="sugefeedback">{state}</div>
					) : (
						<form>
							<div>
								<textarea
									type="text-area"
									aria-label="sugerencias"
									name="sugerencia"
									ref={inputRef}
									id="sugerencia"
									placeholder="Ingrese comentario o sugerencia..."
									rows="5"
								/>
							</div>
							<div>
								<button className="btn btn-ghost" type="submit" id="submit" onClick={submitForm}>
									Enviar
								</button>
							</div>
						</form>
					)}
				</div>
			) : null}
		</div>
	);
}

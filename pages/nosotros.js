import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Nosotros() {
	const config = {
		formUrl: "https://script.google.com/macros/s/AKfycbyQ8GqFqFQ77cLbebDwEgsJgVeaUffdbIkiaYtIA7lxVg8OFtkX/exec",
	};

	//   await axios({
	// 	url: `${config.cors}${config.formUrl}`,
	// 	method: 'post',
	// 	data: formData,
	// 	responseType: 'json'
	//   })
	//   .then(() => {
	// 	console.log('response', response);
	//   })
	//   .catch(err => {
	// 	console.log('err', err);
	//   })
	// }
	// const FormData = require("form-data");

	// const form = new FormData();
	// form.append("sugerencia", "sugerencia");

	function submitForm(e) {
		e.preventDefault();
		var a = document.getElementById("myform");
		var formData = new FormData(a);
		axios({
			url: "https://script.google.com/macros/s/AKfycbyQ8GqFqFQ77cLbebDwEgsJgVeaUffdbIkiaYtIA7lxVg8OFtkX/exec",
			method: "post",
			data: formData,
			responseType: "json",
		})
			// .get(config.formUrl)
			.then((res) => {
				console.log("response", res);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<Head>
				<title>Nosotros - verdifrutti</title>
			</Head>
			<Header />
			<main className="container mx-auto px-8 mt-5">
				<h1 className="text-4xl text-accent-1">Somos vertempo</h1>

				<form id="myform">
					<div>
						<label>Sugerencia</label>
						<input type="text" name="sugerencia" placeholder="Field 2" />
					</div>
					<div>
						<button type="submit" onClick={submitForm}>
							Submit
						</button>
					</div>
				</form>
			</main>
			<Footer />
		</div>
	);
}

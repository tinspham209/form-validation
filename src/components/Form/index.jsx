import React from "react";
import "./style.css";
import FormSignUp from "../FormSignUp";
import FormSuccess from "../FormSuccess";

import { useState } from "react";
const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const submitForm = () => {
		setIsSubmitted(true);
	};
	return (
		<>
			<div className="form-container">
				<span className="close-btn"></span>
				<div className="form-content-left">
					<img src="img/img-2.svg" alt="spaceship" className="form-img" />
				</div>
				{!isSubmitted ? (
					<FormSignUp submitForm={submitForm} />
				) : (
					<FormSuccess />
				)}
			</div>
		</>
	);
};

export default Form;

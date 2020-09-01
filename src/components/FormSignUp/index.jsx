import React from "react";
import InputField from "../custom-fields/InputField";
import useForm from "../../custom-hooks/useForm";
import validate from "../../validateInfo";
const SignUp = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useForm(
		submitForm,
		validate
	);
	return (
		<div className="form-content-right">
			<form className="form" onSubmit={handleSubmit}>
				<h1>
					Get started with us today! Create your account by filling out the
					information below.
				</h1>
				<InputField
					labelHtmlFor="username"
					labelName="Username"
					type="text"
					inputName="username"
					placeholder="Enter your username"
					value={values.username}
					onChange={handleChange}
					error={errors.username}
				/>
				<InputField
					labelHtmlFor="email"
					labelName="Email"
					type="email"
					inputName="email"
					placeholder="Enter your email"
					value={values.email}
					onChange={handleChange}
					error={errors.email}
				/>
				<InputField
					labelHtmlFor="password"
					labelName="Password"
					type="password"
					inputName="password"
					placeholder="Enter your Password"
					value={values.password}
					onChange={handleChange}
					error={errors.password}
				/>
				<InputField
					labelHtmlFor="password2"
					labelName="Confirm Password"
					type="password"
					inputName="password2"
					placeholder="Confirm your Password"
					value={values.password2}
					onChange={handleChange}
					error={errors.password2}
				/>
				<button className="form-input-btn" type="submit">
					Sign up
				</button>
				<span className="form-input-login">
					Already have an account? Login <a href="#">here</a>
				</span>
			</form>
		</div>
	);
};

export default SignUp;

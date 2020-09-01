import React from "react";

const InputField = ({
	labelHtmlFor,
	labelName,
	type,
	inputName,
	placeholder,
	value,
	onChange,
	error,
}) => {
	return (
		<div className="form-inputs">
			<label htmlFor={labelHtmlFor} className="form-label">
				{labelName}
			</label>
			<input
				id={labelHtmlFor}
				type={type}
				className="form-input"
				name={inputName}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && <p>{error}</p>}
		</div>
	);
};

export default InputField;

import React from "react";

const Input = ({ value, onChange, placeholder, type, margin, onClick }) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
			style={{
				height: "34.13px",
				width: "360px",
				border: "1px solid rgba(0, 0, 0, 0.5)",
				borderRadius: "19.2px",
				outline: "none",
				padding: "0 22.64px",
				boxSizing: "border-box",
				fontWeight: "bold",
				margin: margin,
				color: "rgba(0, 0, 0, 0.5)",
			}}
			value={value}
			onClick={onClick}
		/>
	);
};

export default Input;

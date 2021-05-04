import React from "react";

const Button = ({ children, onClick, disabled }) => {
	return (
		<button
			style={{
				backgroundColor: `${disabled ? "rgba(0, 0, 0, 0.1)" : "#61b15a"}`,
				color: `${disabled ? "rgba(0, 0, 0, 0.3)" : "#ffffff"}`,
				fontWeight: "bold",
				height: "34.12px",
				padding: "0 24px",
				border: "none",
				borderRadius: "17.06px",
				outline: "none",
				cursor: "pointer",
			}}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;

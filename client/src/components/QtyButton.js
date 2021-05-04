import React from "react";

const QtyButton = ({ children, disabled, onClick }) => {
	return (
		<button
			style={{
				backgroundColor: "#ffffff",
				height: "34.13px",
				width: "34.13px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "50%",
				fontSize: "22px",
				cursor: "pointer",
				border: "none",
			}}
			disabled={disabled}
			onClick={onClick}
		>
			<div>{children}</div>
		</button>
	);
};

export default QtyButton;

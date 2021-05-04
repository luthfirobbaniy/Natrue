import React from "react";

const DeleteButton = ({ onClick }) => {
	return (
		<button
			style={{
				backgroundColor: "#d65858",
				border: "none",
				outline: "none",
				borderRadius: "50%",
				height: "34.13px",
				width: "34.13px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				cursor: "pointer",
			}}
			onClick={onClick}
		>
			<i
				className="bi bi-trash-fill"
				style={{
					fontSize: "18px",
					fontWeight: "900",
					color: "white",
					margin: "2px 0 0 0",
				}}
			></i>
		</button>
	);
};

export default DeleteButton;

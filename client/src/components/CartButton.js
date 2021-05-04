import React from "react";
import { Link } from "react-router-dom";

const CartButton = ({ children }) => {
	return (
		<Link
			to="/cart"
			style={{
				textDecoration: "none",
			}}
		>
			<div
				style={{
					margin: "0 23px 0 0",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					cursor: "pointer",
				}}
			>
				<i
					className="bi bi-cart2"
					style={{
						fontSize: "24px",
						fontWeight: "900",
						color: "#61b15a",
						margin: "0 0px 0 0",
					}}
				></i>
				<div
					style={{
						backgroundColor: "#d65858",
						height: "20px",
						width: "20px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "12px",
						margin: "-20px 0 0 -10px",
					}}
				>
					<div
						style={{
							color: "white",
							fontSize: "12px",
							fontWeight: "bold",
						}}
					>
						{children}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CartButton;

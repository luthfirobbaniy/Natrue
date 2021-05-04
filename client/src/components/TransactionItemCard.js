import React from "react";
import { API } from "../helpers";

const TransactionItemCard = ({
	category,
	imagepath,
	name,
	price,
	quantity,
}) => {
	return (
		<div
			style={{
				backgroundColor: "white",
				height: "133px",
				padding: "16px",
				boxSizing: "border-box",
				display: "flex",
				fontWeight: "bold",
				boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
			}}
		>
			<img
				src={`${API}/${imagepath[0].path}`}
				style={{
					backgroundColor: "red",
					height: "100.11px",
					width: "100.11px",
					margin: "0 16px 0 0",
					objectFit: "cover",
				}}
			/>
			<div
				style={{
					// backgroundColor: "red",
					flex: "1",
					margin: "0 16px 0 0",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						margin: "-4px 0 0 0",
					}}
				>
					<div
						style={{
							margin: "0 0 -10px 0",
							color: "#61b15a",
						}}
					>
						{category}
					</div>
					<div
						style={{
							fontSize: "24px",
							margin: "16px 0 -10px 0",
						}}
					>
						{name}
					</div>
					<div
						style={{
							margin: "16px 0 0 0",
							opacity: "0.5",
						}}
					>
						Rp{price.toLocaleString()}
					</div>
				</div>
			</div>
			<div
				style={{
					// backgroundColor: "purple",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						backgroundColor: "#61b15a",
						height: "34.13px",
						width: "34.13px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "19.2px",
						fontSize: "16px",
						color: "white",
						margin: "0 15px",
					}}
				>
					{quantity}
				</div>
			</div>
		</div>
	);
};

export default TransactionItemCard;

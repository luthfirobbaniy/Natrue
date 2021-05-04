import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ imagepath, name, price }) => {
	return (
		<div
			style={{
				backgroundColor: "white",
				height: "332.54px",
				width: "240px",
				margin: "30px",
				boxShadow: "0px 6px 48px rgba(0, 0, 0, 0.1)",
			}}
		>
			<Link
				to={`/product-detail?product=${name}`}
				style={{
					textDecoration: "none",
					color: "inherit",
				}}
			>
				<img
					src={imagepath}
					style={{
						backgroundColor: "green",
						height: "240px",
						width: "240px",
						objectFit: "cover",
					}}
				/>
				<div
					style={{
						padding: "24px",
						boxSizing: "border-box",
						fontWeight: "bold",
					}}
				>
					<div
						style={{
							margin: "-10px 0 -10px 0",
							fontSize: "24px",
							color: "#61b15a",
						}}
					>
						{name}
					</div>
					<div
						style={{
							margin: "16px 0 0 0",
							fontSize: "16px",
							opacity: "0.5",
						}}
					>
						Rp{price}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;

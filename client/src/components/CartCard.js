import React from "react";
import { useDispatch } from "react-redux";
import { DeleteButton } from ".";
import { API } from "../helpers";
import { deleteCart, patchQtyCart } from "../redux/actions";
import QtyButton from "./QtyButton";

const CartCard = ({
	accountId,
	cartId,
	name,
	price,
	category,
	quantity,
	stock,
	imagepath,
}) => {
	const dispatch = useDispatch();

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
			<div>
				{stock < quantity ? (
					<div
						style={{
							height: "100.11px",
							width: "100.11px",
							backgroundColor: "rgba(214, 88, 88, 0.8)",
							position: "absolute",
							padding: "18px",
							boxSizing: "border-box",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							backdropFilter: "blur(3px)",
						}}
					>
						<div
							style={{
								color: "white",
								fontSize: "24px",
								textAlign: "center",
							}}
						>
							Out of Stock
						</div>
					</div>
				) : null}
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
			</div>
			<div
				style={{
					// backgroundColor: "red",
					flex: "3",
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
					margin: "0 16px 0 0",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<QtyButton
					disabled={quantity <= 1}
					onClick={() =>
						dispatch(
							patchQtyCart({
								accountId,
								cartId,
								quantity: quantity - 1,
							})
						)
					}
				>
					-
				</QtyButton>
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
				<QtyButton
					disabled={quantity >= stock}
					onClick={() =>
						dispatch(
							patchQtyCart({
								accountId,
								cartId,
								quantity: quantity + 1,
							})
						)
					}
				>
					+
				</QtyButton>
			</div>
			<div
				style={{
					// backgroundColor: "purple",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<DeleteButton
					onClick={() => dispatch(deleteCart({ accountId, cartId }))}
				/>
			</div>
		</div>
	);
};

export default CartCard;

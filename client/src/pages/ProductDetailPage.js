import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, QtyButton } from "../components";
import queryString from "querystring";

import { getSpecificProduct, patchQtyCart, postCart } from "../redux/actions";
import { API } from "../helpers";
import { Redirect } from "react-router";

const ProductDetailPage = (props) => {
	const [qty, setQty] = useState(1);
	const [redirect, setRedirect] = useState(false);

	const { selectedProduct } = useSelector((state) => state.productReducer);
	const { accountId, isLogin } = useSelector((state) => state.authReducer);
	const { cart } = useSelector((state) => state.userReducer);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			getSpecificProduct({
				product: queryString.parse(props.location.search)["?product"],
			})
		);
	}, []);

	const findCart = () => {
		if (cart) {
			const find = cart.data.find((val) => {
				return val.productId === selectedProduct.id;
			});

			if (find)
				return {
					id: find.id,
					quantity: find.quantity,
				};
		}

		return "";
	};

	const addToCart = () => {
		if (!isLogin) {
			return setRedirect(true);
		}

		dispatch(
			postCart({
				accountId,
				productId: selectedProduct.id,
				quantity: qty,
			})
		);
	};

	if (redirect)
		return (
			<Redirect
				push
				to={`/login?from=${props.location.pathname}${props.location.search}`}
			/>
		);

	if (!selectedProduct) return <div>Loading</div>;

	return (
		<>
			<div
				style={{
					display: "flex",
					margin: "0 0 180px 0",
				}}
			>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "1",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						width: "480px",
					}}
				>
					<div
						style={{
							backgroundColor: "white",
							height: "360px",
							width: "480px",
							padding: "24px",
							boxSizing: "border-box",
							margin: "0 0 30px 0",
							boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
						}}
					>
						<img
							src={`${API}${selectedProduct.imagepath[0].path}`}
							style={{
								backgroundColor: "grey",
								width: "432px",
								height: "312px",
							}}
						/>
					</div>
					<div
						style={{
							// backgroundColor: "greenyellow",
							width: "480px",
							height: "60px",
							display: "flex",
							justifyContent: "center",
						}}
					></div>
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "1",
						height: "438px",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						flex: "5",
						fontWeight: "bold",
					}}
				>
					<div
						style={{
							margin: "20px 0 -12px 0",
							color: "#61b15a",
						}}
					>
						{selectedProduct.category}
					</div>
					<div
						style={{
							fontSize: "36px",
							margin: "24px 0 -13px 0",
						}}
					>
						{selectedProduct.name}
					</div>
					<div
						style={{
							margin: "24px 0 -8px 0",
							opacity: "0.5",
						}}
					>
						Rp{selectedProduct.price.toLocaleString()}
					</div>
					<div
						style={{
							margin: "24px 0 -8px 0",
							opacity: "0.5",
						}}
					>
						{selectedProduct.description}
					</div>
					<div
						style={{
							margin: "48px 0 -4px 0",
						}}
					>
						{`Available - ${selectedProduct.stock} Pcs ${
							findCart() ? `(${findCart().quantity} Pcs in your cart)` : ""
						}`}
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							margin: "24px 0 0 -14px",
						}}
					>
						<div
							style={{
								display: "flex",
								margin: "0px 15px 0 0",
							}}
						>
							<QtyButton
								disabled={
									qty <= 1 || qty + findCart().quantity > selectedProduct.stock
								}
								onClick={() => setQty(qty - 1)}
							>
								-
							</QtyButton>
							<div
								style={{
									backgroundColor: "#61b15a",
									height: "34.13px",
									width: "34.13px",
									margin: "0 15px",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "19.2px",
									color: "white",
								}}
							>
								<div>{qty}</div>
							</div>
							<QtyButton
								disabled={
									qty >= selectedProduct.stock ||
									qty + findCart().quantity >= selectedProduct.stock
								}
								onClick={() => setQty(qty + 1)}
							>
								+
							</QtyButton>
						</div>
						<Button
							disabled={
								qty + findCart().quantity > selectedProduct.stock ||
								selectedProduct.stock <= 0
							}
							onClick={() => {
								addToCart();
							}}
						>
							Add to cart
						</Button>
					</div>
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "1",
					}}
				></div>
			</div>
		</>
	);
};

export default ProductDetailPage;

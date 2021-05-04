import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CartCard } from "../components";
import { checkout, getCart, login } from "../redux/actions";
import Toastify from "toastify-js";
import { Redirect } from "react-router";

const CartPage = (props) => {
	const { accountId, isLogin, isFinished } = useSelector(
		(state) => state.authReducer
	);
	const { address, cart, payment, wallet } = useSelector(
		(state) => state.userReducer
	);

	const [selectedAddress, setSelectedAddress] = useState(null);
	const [selectedPayment, setSelectedPayment] = useState(null);
	const [process, setProcess] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCart({ accountId }));
	}, []);

	useEffect(() => {
		if (address[0]) {
			setSelectedAddress(address[0].fullAddress);
		}
	}, [address]);

	useEffect(() => {
		if (payment) {
			setSelectedPayment(payment.method);
		}
	}, [payment]);

	const renderAddress = () => {
		var output = address[0].fullAddress.split("");
		output.splice(51, output.length - 51);

		return <>{`${output.join("")}...`}</>;
	};

	const clickCheckout = () => {
		const outOfStock = cart.data.find((val) => {
			return val.stock <= 0;
		});

		if (outOfStock) {
			return Toastify({
				text:
					"Before checkout, items that are out of stock must be deleted first",
				duration: 3000,
				gravity: "top",
				position: "center",
				backgroundColor: "#d65858",
				className: "app",
				style: {
					fontWeight: "bold",
				},
			}).showToast();
		}

		dispatch(
			checkout({
				accountId: accountId,
				address: selectedAddress,
				payment: selectedPayment,
				total: cart.total,
			})
		);

		setProcess(true);
	};

	if (process) {
		return <Redirect push to="/transaction" />;
	}

	if (isFinished && !isLogin) {
		return (
			<Redirect
				push
				to={`/login?from=${props.location.pathname}${props.location.search}`}
			/>
		);
	}

	if (!cart || !wallet || !address[0]) return <div>Loading</div>;

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
						flex: "5",
					}}
				>
					<div
						style={{
							height: "83.04px",
							display: "flex",
						}}
					>
						<div
							style={{
								fontWeight: "bold",
								fontSize: "36px",
								margin: "-8px 0 0 0",
							}}
						>
							Cart
						</div>
					</div>
					{cart.data.length <= 0 ? (
						<div
							style={{
								fontWeight: "bold",
								color: "rgba(0, 0, 0, 0.5)",
							}}
						>
							Cart Empty
						</div>
					) : (
						cart.data.map((val) => {
							return (
								<div style={{ margin: "0 0 24px 0" }}>
									<CartCard
										accountId={accountId}
										cartId={val.id}
										name={val.name}
										price={val.price}
										category={val.category}
										quantity={val.quantity}
										stock={val.stock}
										imagepath={val.imagepath}
									/>
								</div>
							);
						})
					)}
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "1",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						flex: "4",
					}}
				>
					<div
						style={{
							height: "83.04px",
						}}
					></div>
					<div
						style={{
							backgroundColor: "white",
							margin: "0 0 24px 0",
							padding: "24px",
							boxSizing: "border-box",
							boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
						}}
					>
						<div
							style={{
								margin: "0 0 24px 0",
							}}
						>
							<div
								style={{
									// backgroundColor: "green",
									margin: "-4px 0 -4px 0",
									display: "flex",
									justifyContent: "space-between",
									fontWeight: "bold",
									color: "#61b15a",
								}}
							>
								<div>Address</div>
								<div
									style={{
										cursor: "not-allowed",
									}}
								>
									Edit
								</div>
							</div>
							<div
								style={{
									backgroundColor: "rgba(0, 0, 0, 0.05)",
									margin: "16px 0 0 0",
									display: "flex",
									flexDirection: "column",
									padding: "16px",
									boxSizing: "border-box",
								}}
							>
								<div
									style={{
										margin: "-4px 0 -4px 0",
										fontWeight: "bold",
									}}
								>
									<div
										style={{
											margin: "0 0 -12px 0",
										}}
									>
										{address[0].name}
									</div>
									<div
										style={{
											margin: "16px 0 0 0",
											opacity: "0.5",
											lineHeight: "27px",
										}}
									>
										{/* {renderAddress()} */}
										{address[0].fullAddress}
									</div>
								</div>
							</div>
						</div>
						<div>
							<div
								style={{
									// backgroundColor: "green",
									margin: "-4px 0 -4px 0",
									display: "flex",
									justifyContent: "space-between",
									fontWeight: "bold",
									color: "#61b15a",
								}}
							>
								<div>Payment Method</div>
								<div
									style={{
										cursor: "not-allowed",
									}}
								>
									Edit
								</div>
							</div>
							<div
								style={{
									backgroundColor: "rgba(0, 0, 0, 0.05)",
									margin: "16px 0 0 0",
									display: "flex",
									flexDirection: "column",
									padding: "16px",
									boxSizing: "border-box",
								}}
							>
								<div
									style={{
										margin: "-4px 0 -4px 0",
										fontWeight: "bold",
									}}
								>
									<div
										style={{
											margin: "0 0 -8px 0",
										}}
									>
										Wallet
									</div>
									<div
										style={{
											margin: "16px 0 0 0",
											opacity: "0.5",
										}}
									>
										Balance: Dummy
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							height: "130.28px",
							margin: "0 0 24px 0",
							padding: "24px",
							boxSizing: "border-box",
							display: "flex",
							flexDirection: "column",
							boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
						}}
					>
						<div
							style={{
								display: "flex",
								margin: "-4px 0 -8px 0",
								justifyContent: "space-between",
								fontWeight: "bold",
								opacity: "0.5",
							}}
						>
							<div>Sub Total</div>
							<div>Rp{cart.total.toLocaleString()}</div>
						</div>
						<div
							style={{
								display: "flex",
								margin: "16px 0 -8px 0",
								justifyContent: "space-between",
								fontWeight: "bold",
								opacity: "0.5",
							}}
						>
							<div>Shipping Cost</div>
							<div>Free</div>
						</div>
						<div
							style={{
								display: "flex",
								margin: "32px 0 0 0",
								justifyContent: "space-between",
								fontWeight: "bold",
								color: "#61b15a",
							}}
						>
							<div>Total</div>
							<div>Rp{(cart.total + 0).toLocaleString()}</div>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<Button
							onClick={() => clickCheckout()}
							disabled={cart.data.length <= 0}
						>
							Checkout
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

export default CartPage;

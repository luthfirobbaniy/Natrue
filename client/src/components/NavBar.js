import React, { useState } from "react";
import { Button, CartButton } from ".";
import logo from "../assets/natrue-logo.png";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountDropdown from "./AccountDropdown";
import { logout } from "../redux/actions";

const NavBar = () => {
	const { isLogin } = useSelector((state) => state.authReducer);
	const { cart } = useSelector((state) => state.userReducer);

	const [logoutSuccess, setLogoutSuccess] = useState(false);

	const dispatch = useDispatch();

	const clickLogout = () => {
		dispatch(logout());
		setLogoutSuccess(true);
	};

	if (logoutSuccess) {
		document.location.assign("/");
	}

	return (
		<div
			style={{
				// backgroundColor: "red",
				height: "77.28px",
				display: "flex",
				margin: "0 0 60px 0",
			}}
		>
			<div
				style={{
					// backgroundColor: "yellow",
					height: "77.28px",
					flex: "8",
				}}
			></div>
			<div
				style={{
					// backgroundColor: "red",
					height: "77.28px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontWeight: "bold",
					color: "#61b15a",
					flex: "8",
				}}
			>
				<Link
					to="/product/vegetable"
					style={{
						textDecoration: "none",
						color: "inherit",
					}}
				>
					Vegetable
				</Link>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "100%",
						flex: "1",
						maxWidth: "45px",
					}}
				></div>
				<Link
					to="/product/fruit"
					style={{
						textDecoration: "none",
						color: "inherit",
					}}
				>
					Fruit
				</Link>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "100%",
						flex: "1",
						maxWidth: "45px",
					}}
				></div>
				<Link to="/">
					<img src={logo} style={{ height: "38.64px" }} />
				</Link>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "100%",
						flex: "1",
						maxWidth: "45px",
					}}
				></div>
				<Link
					to="/product/tea"
					style={{
						textDecoration: "none",
						color: "inherit",
					}}
				>
					Tea
				</Link>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "100%",
						flex: "1",
						maxWidth: "45px",
					}}
				></div>
				<Link
					to="/product/seasoning"
					style={{
						textDecoration: "none",
						color: "inherit",
					}}
				>
					Seasoning
				</Link>
			</div>
			<div
				style={{
					// backgroundColor: "red",
					height: "77.28px",
					flex: "6",
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
				}}
			>
				{isLogin ? (
					<>
						<CartButton>{cart ? cart.data.length : "0"}</CartButton>
						<AccountDropdown logout={clickLogout} />
					</>
				) : (
					<Link to="/login">
						<Button>Login</Button>
					</Link>
				)}
			</div>
			<div
				style={{
					// backgroundColor: "yellow",
					height: "77.28px",
					flex: "2",
				}}
			></div>
		</div>
	);
};

export default NavBar;

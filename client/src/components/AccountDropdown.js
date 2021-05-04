import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { API } from "../helpers";
import { logout } from "../redux/actions";

const AccountDropdown = ({ logout }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const { imagepath } = useSelector((state) => state.authReducer);

	window.onclick = (e) => {
		if (!e.target.matches(".account")) {
			setShowDropdown(false);
		}
	};

	return (
		<>
			<img
				className="account"
				style={{
					backgroundColor: "gray",
					height: "34.12px",
					width: "34.12px",
					borderRadius: "50%",
					border: "none",
					cursor: "pointer",
					margin: "0 24px 0 0",
					objectFit: "cover",
				}}
				src={`${API}${imagepath}`}
				onClick={() => setShowDropdown(!showDropdown)}
			/>
			<div
				style={{
					display: showDropdown ? "initial" : "none",
					top: "77.28px",
					position: "absolute",
				}}
			>
				<div
					style={{
						backgroundColor: "white",
						boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
						height: "122px",
						width: "134px",
						padding: "24px",
						boxSizing: "border-box",
					}}
				>
					<div
						style={{
							// backgroundColor: "yellow",
							height: "100%",
							fontWeight: "bold",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<div
							style={{
								opacity: 0.5,
								width: "100%",
								textAlign: "right",
								cursor: "not-allowed",
								margin: "-4px 0 -8px 0",
							}}
						>
							<div>Wallet</div>
						</div>
						<Link
							to="/transaction"
							style={{
								textDecoration: "none",
								color: "initial",
							}}
						>
							<div
								style={{
									opacity: 0.5,
									width: "100%",
									textAlign: "right",
									margin: "16px 0 -8px 0",
								}}
							>
								Transaction
							</div>
						</Link>
						<div
							style={{
								width: "100%",
								color: "#d65858",
								textAlign: "right",
								cursor: "pointer",
								margin: "24px 0 0px 0",
							}}
							onClick={logout}
						>
							Logout
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountDropdown;

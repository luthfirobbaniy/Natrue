import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Button, Input } from "../components";
import { login } from "../redux/actions";
import Toastify from "toastify-js";

const LoginPage = (props) => {
	const [username, setUsername] = useState("User");
	const [password, setPassword] = useState("User");

	const { isLogin } = useSelector((state) => state.authReducer);

	const dispatch = useDispatch();

	const clickLogin = () => {
		dispatch(login({ username, password }));
	};

	const alert = () => {
		Toastify({
			text: "Just click the login button",
			duration: 3000,
			gravity: "top",
			position: "center",
			backgroundColor: "#d65858",
			className: "app",
			style: {
				fontWeight: "bold",
			},
		}).showToast();
	};

	if (isLogin) {
		let url = "/";

		if (props.location.search) {
			url = props.location.search.split("?from=")[1];
		}

		return <Redirect to={`${url}`} />;
	}

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					margin: "120px 0 120px 0",
				}}
			>
				<div>
					<div
						style={{
							fontWeight: "bold",
							fontSize: "36px",
							margin: "-8px 0 -9px 0",
							textAlign: "center",
						}}
					>
						Login
					</div>
					<div
						style={{
							// backgroundColor: "pink",
							margin: "24px 0 -3px 0",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Input
								value={username}
								placeholder={"Username"}
								type={"text"}
								onChange={""}
								margin={"12px 0"}
								onClick={alert}
							/>
							<Input
								value={password}
								placeholder={"Password"}
								type={"password"}
								onChange={""}
								margin={"12px 0"}
								onClick={alert}
							/>
						</div>
						<div
							style={{
								fontWeight: "bold",
								fontSize: "13.33px",
								margin: "-3px 0 0 22.64px",
								color: "#61b15a",
								cursor: "not-allowed",
							}}
						>
							Forget password
						</div>
					</div>
					<div
						style={{
							display: "flex",
							display: "flex",
							justifyContent: "center",
							margin: "36px 0 -4px 0",
						}}
					>
						<Button onClick={clickLogin}>Login</Button>
						<div
							style={{
								height: "34.12px",
								width: "99px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div
								style={{
									fontWeight: "bold",
									color: "#61b15a",
									fontSize: "13.33px",
									cursor: "pointer",
								}}
								onClick={() => alert()}
							>
								Register
							</div>
						</div>
					</div>
					<div
						style={{
							fontWeight: "bold",
							fontSize: "16px",
							textAlign: "center",
							fontStyle: "italic",
							margin: "36px 0 0 0",
							color: "rgba(0, 0, 0, 0.2)",
						}}
					>
						No need to register, just click the login button
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;

import React from "react";
import vegetable from "../assets/landingPage/vegetable.jpg";
import fruit from "../assets/landingPage/fruit.jpg";
import tea from "../assets/landingPage/tea.jpg";
import seasoning from "../assets/landingPage/seasoning.jpg";
import { Button } from "../components";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<>
			<div
				style={{
					display: "flex",
					height: "360px",
					margin: "0 0 180px 0",
				}}
			>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "360px",
						flex: "2",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						height: "360px",
						flex: "9",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							fontWeight: "bold",
							fontSize: "24px",
							margin: "-6px 0 -19px 0",
							color: "#61b15a",
						}}
					>
						Natrue
					</div>
					<div
						style={{
							fontWeight: "900",
							fontSize: "54px",
							margin: "24px 0 -21px 0",
						}}
					>
						From True Nature
					</div>
					<div
						style={{
							fontWeight: "bold",
							fontSize: "16px",
							opacity: "0.5",
							lineHeight: "25px",
							margin: "24px 0 -7px 0",
						}}
					>
						Ini adalah bagian deskripsi landing page. Ini adalah bagian
						deskripsi landing page. Ini adalah bagian deskripsi landing page.
					</div>
					<div
						style={{
							margin: "24px 0 0 0",
						}}
					>
						<Button
							onClick={async () => {
								document
									.getElementById("category")
									.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Show Product
						</Button>
					</div>
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "360px",
						flex: "2",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						height: "360px",
						flex: "9",
					}}
				>
					<div
						style={{
							height: "90px",
							margin: "0 0 45px 0",
						}}
					>
						<img
							style={{
								height: "100%",
								width: "100%",
								objectFit: "cover",
							}}
							src={fruit}
						/>
					</div>
					<div
						style={{
							height: "90px",
							margin: "0 0 45px 0",
							marginleft: "auto",
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<img
							style={{
								height: "100%",
								width: "80%",
								objectFit: "cover",
							}}
							src={vegetable}
						/>
					</div>
					<div
						style={{
							height: "90px",
							margin: "0 0 45px 0",
						}}
					>
						<img
							style={{
								height: "100%",
								width: "100%",
								objectFit: "cover",
							}}
							src={seasoning}
						/>
					</div>
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "360px",
						flex: "2",
					}}
				></div>
			</div>
			<div
				style={{
					display: "flex",
					height: "581px",
					margin: "0 0 120px 0",
				}}
				id="category"
			>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "581px",
						flex: "2",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						height: "581px",
						flex: "20",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							fontSize: "36px",
							fontWeight: "bold",
							margin: "-8px 0 -9px 0",
							textAlign: "center",
						}}
					>
						Category
					</div>
					<Link to="/product/vegetable">
						<div
							style={{
								height: "90px",
								margin: "60px 0 45px 0",
								position: "relative",
							}}
						>
							<div
								style={{
									backgroundColor: "rgba(0, 0, 0, 0.5)",
									height: "90px",
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									position: "absolute",
									fontSize: "36px",
									fontWeight: "bold",
									color: "#ffffff",
								}}
							>
								Vegetable
							</div>
							<img
								style={{
									height: "100%",
									width: "100%",
									objectFit: "cover",
								}}
								src={vegetable}
							/>
						</div>
					</Link>
					<Link to="/product/fruit">
						<div
							style={{
								height: "90px",
								margin: "0 0 45px 0",
								position: "relative",
							}}
						>
							<div
								style={{
									backgroundColor: "rgba(0, 0, 0, 0.5)",
									height: "90px",
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									position: "absolute",
									fontWeight: "bold",
									fontSize: "36px",
									color: "#ffffff",
								}}
							>
								Fruit
							</div>
							<img
								style={{
									height: "100%",
									width: "100%",
									objectFit: "cover",
								}}
								src={fruit}
							/>
						</div>
					</Link>
					<Link to="/product/tea">
						<div
							style={{
								height: "90px",
								margin: "0 0 45px 0",
								position: "relative",
							}}
						>
							<div
								style={{
									backgroundColor: "rgba(0, 0, 0, 0.5)",
									height: "90px",
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									position: "absolute",
									fontWeight: "bold",
									fontSize: "36px",
									color: "#ffffff",
								}}
							>
								Tea
							</div>
							<img
								style={{
									height: "100%",
									width: "100%",
									objectFit: "cover",
								}}
								src={tea}
							/>
						</div>
					</Link>
					<Link to="/product/seasoning">
						<div
							style={{
								height: "90px",
								margin: "0 0 45px 0",
								position: "relative",
							}}
						>
							<div
								style={{
									backgroundColor: "rgba(0, 0, 0, 0.5)",
									height: "90px",
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									position: "absolute",
									fontWeight: "bold",
									fontSize: "36px",
									color: "#ffffff",
								}}
							>
								Seasoning
							</div>
							<img
								style={{
									height: "100%",
									width: "100%",
									objectFit: "cover",
								}}
								src={seasoning}
							/>
						</div>
					</Link>
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "581px",
						flex: "2",
					}}
				></div>
			</div>
		</>
	);
};

export default LandingPage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { API } from "../helpers";
import { getProduct, getSpecificProduct } from "../redux/actions";

const ProductFeedPage = (props) => {
	const dispatch = useDispatch();

	const [orderBy, setOrderBy] = useState("alphabetical");
	const [load, setLoad] = useState(0);

	const { category, description, imagepath, maxLoad, product } = useSelector(
		(state) => state.productReducer
	);

	useEffect(() => {
		setLoad(0);
		dispatch(
			getProduct({
				category: props.location.pathname.split("/")[2],
				orderBy: orderBy,
				load: load,
			})
		);
	}, [props.location.pathname, orderBy]);

	useEffect(() => {
		dispatch(
			getProduct({
				category: props.location.pathname.split("/")[2],
				orderBy: orderBy,
				load: load,
			})
		);
	}, [load]);

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
						height: "360px",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						flex: "4",
						height: "360px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							fontWeight: "900",
							fontSize: "54px",
							margin: "-13px 0 -20px 0",
						}}
					>
						{category}
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
						{description}
					</div>
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "1",
						height: "360px",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						flex: "5",
						height: "360px",
					}}
				>
					<img
						src={`${API}${imagepath}`}
						style={{
							height: "100%",
							width: "100%",
							objectFit: "cover",
						}}
					/>
				</div>
				<div
					style={{
						flex: "1",
					}}
				></div>
			</div>
			<div
				style={{
					display: "flex",
					margin: "0 0 -8px 0",
				}}
			>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "1",
						height: "95px",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "green",
						height: "95px",
						flex: "10",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							// backgroundColor: "red",
							height: "95px",
							display: "flex",
							flexDirection: "column",
							flexBasis: "662px",
							flexWrap: "wrap",
							fontSize: "24px",
							fontWeight: "bold",
						}}
					>
						<div
							style={{
								// backgroundColor: "pink",
								height: "17.1px",
								flex: "1",
								margin: "0 0 60px 0",
							}}
						>
							<div
								style={{
									margin: "-5px 0 0 0",
									textAlign: "center",
								}}
							>
								Order By
							</div>
						</div>
						<div
							style={{
								// backgroundColor: "pink",
								height: "17.1px",
								flex: "1",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<div
								style={{
									color:
										orderBy === "alphabetical"
											? "#61b15a"
											: "rgba(0, 0, 0, 0.3)",
									cursor: "pointer",
									margin: "-5px 0 0 0",
								}}
								onClick={() => setOrderBy("alphabetical")}
							>
								Alphabetical
							</div>
							<div
								style={{
									color:
										orderBy === "lowestPrice"
											? "#61b15a"
											: "rgba(0, 0, 0, 0.3)",
									cursor: "pointer",
									margin: "-5px 0 0 0",
								}}
								onClick={() => setOrderBy("lowestPrice")}
							>
								Lowest Price
							</div>
							<div
								style={{
									color:
										orderBy === "highestPrice"
											? "#61b15a"
											: "rgba(0, 0, 0, 0.3)",
									cursor: "pointer",
									margin: "-5px 0 0 0",
								}}
								onClick={() => setOrderBy("highestPrice")}
							>
								Highest Price
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "1",
						height: "95px",
					}}
				></div>
			</div>
			<div
				style={{
					display: "flex",
					margin: "60px 0 180px 0",
				}}
			>
				<div
					style={{
						// backgroundColor: "blue",
						flexWrap: "wrap",
						display: "flex",
						flex: "1",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						flexWrap: "wrap",
						flexBasis: "900px",
					}}
				>
					{product.length <= 0 ? (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
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
								<i
									className="bi bi-x-square-fill"
									style={{
										color: "#e5e5e5",
										fontSize: "121.5px",
										margin: "0 0 -20px 0",
									}}
								></i>
								<div
									style={{
										fontSize: "24px",
										fontWeight: "bold",
										color: "#e5e5e5",
										margin: "30px 0 0 0",
										fontSize: "24px",
									}}
								>
									Sorry, we don't have any products in this category at this
									time
								</div>
							</div>
						</div>
					) : (
						<>
							<div
								style={{
									// backgroundColor: "red",
									flexWrap: "wrap",
									display: "flex",
									flexBasis: "900px",
									margin: "0 0 30px 0",
								}}
							>
								{product.map((val) => {
									return (
										<ProductCard
											imagepath={`${API}${val.imagepath[0].path}`}
											name={val.name}
											price={val.price.toLocaleString()}
										/>
									);
								})}
							</div>
							{!(maxLoad <= load) ? (
								<div
									style={{
										// backgroundColor: "pink",
										fontSize: "24px",
										fontWeight: "bold",
										margin: "0px 0 0 0",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<div
										style={{
											margin: "-6px 0 0 0",
											color: "#61b15a",
											cursor: "pointer",
										}}
										onClick={() => setLoad(load + 1)}
									>
										More
									</div>
								</div>
							) : null}
						</>
					)}
				</div>
				<div
					style={{
						// backgroundColor: "blue",
						flexWrap: "wrap",
						display: "flex",
						flex: "1",
					}}
				></div>
			</div>
		</>
	);
};

export default ProductFeedPage;

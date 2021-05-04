import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Button, TransactionCard, TransactionDetailCard } from "../components";
import { getTransactionData } from "../redux/actions";

const TransactionPage = (props) => {
	const { accountId, isLogin, isFinished } = useSelector(
		(state) => state.authReducer
	);
	const { transaction } = useSelector((state) => state.userReducer);

	const [selectedTransaction, setSelectedTransaction] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTransactionData({ accountId }));
	}, []);

	const showDetails = (index) => {
		setSelectedTransaction(index);
	};

	if (isFinished && !isLogin) {
		return (
			<Redirect
				push
				to={`/login?from=${props.location.pathname}${props.location.search}`}
			/>
		);
	}

	return (
		<>
			<div
				style={{
					display: "flex",
					margin: "0 0 44px 0",
				}}
			>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "2",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						width: "540px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							fontWeight: "bold",
							fontSize: "36px",
							margin: "-8px 0 -13px 0",
						}}
					>
						Transaction
					</div>
					<div
						style={{
							// backgroundColor: "pink",
							fontWeight: "bold",
							fontSize: "16px",
							color: "rgba(0, 0, 0, 0.5)",
							margin: "48px 0 0px 0",
						}}
					>
						Click Card for More Details
					</div>
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "13",
					}}
				></div>
			</div>
			<div
				style={{
					// backgroundColor: "pink",
					display: "flex",
					margin: "0 0 180px 0",
				}}
			>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "2",
					}}
				></div>
				<div
					style={{
						// backgroundColor: "red",
						width: "540px",
					}}
				>
					{transaction.length <= 0 ? (
						<div
							style={{
								fontWeight: "bold",
								color: "rgba(0, 0, 0, 0.5)",
							}}
						>
							No transaction
						</div>
					) : (
						transaction.map((val, i) => {
							return (
								<div
									style={{
										margin: "0 0 24px 0",
									}}
								>
									<TransactionCard
										transactionCode={val.serialCode}
										date={val.date}
										time={val.time}
										status={val.status}
										total={val.total}
										cardColor={selectedTransaction === i ? "#e5e5e5" : "white"}
										onClick={() => showDetails(i)}
									/>
								</div>
							);
						})
					)}
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						flex: "2",
					}}
				></div>
				<div
					style={{
						flex: "9",
					}}
				>
					{selectedTransaction === null ? (
						<div
							style={{
								backgroundColor: "rgba(0, 0, 0, 0.05)",
								flex: "9",
							}}
						>
							<div
								style={{
									height: "451.84px",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontWeight: "bold",
									color: "rgba(0, 0, 0, 0.4)",
								}}
							>
								<div>Click Card For More Details</div>
							</div>
						</div>
					) : (
						<TransactionDetailCard
							accountId={accountId}
							data={transaction[selectedTransaction]}
						/>
					)}
				</div>
				<div
					style={{
						// backgroundColor: "yellow",
						height: "451.84px",
						flex: "2",
					}}
				></div>
			</div>
		</>
	);
};

export default TransactionPage;

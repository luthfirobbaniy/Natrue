import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TransactionItemModal } from ".";
import { postCart, reorder } from "../redux/actions";

const TransactionDetailCard = ({ accountId, data }) => {
	const [showItem, setShowItem] = useState(false);

	const toggleModal = () => {
		setShowItem(!showItem);
	};

	const dispatch = useDispatch();

	return (
		<>
			<div
				style={{
					backgroundColor: "white",
					boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
				}}
			>
				<div
					style={{
						// backgroundColor: "blue",
						padding: "0 24px",
						display: "flex",
						flexDirection: "column",
						boxSizing: "border-box",
						fontWeight: "bold",
					}}
				>
					<div
						style={{
							borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
							padding: "24px 0",
						}}
					>
						<div
							style={{
								display: "flex",
								margin: "0 0 -9px 0",
								justifyContent: "space-between",
							}}
						>
							<div
								style={{
									fontSize: "24px",
									margin: "-6px 0 0 0",
									color: "#61b15a",
								}}
							>
								{data.serialCode}
							</div>
							<div
								style={{
									margin: "-4px 0 0 0",
									color: "rgba(0, 0, 0, 0.5)",
								}}
							>
								{data.status}
							</div>
						</div>
						<div
							style={{
								margin: "16px 0 -4px 0",
								opacity: "0.5",
							}}
						>
							{data.date} ({data.time})
						</div>
					</div>
				</div>
				<div
					style={{
						// backgroundColor: "green",
						display: "flex",
						flexDirection: "column",
						padding: "24px",
						boxSizing: "border-box",
						fontWeight: "bold",
					}}
				>
					<div
						style={{
							margin: "-4px 0 -12px 0",
							color: "#61b15a",
						}}
					>
						Delivered to
					</div>
					<div
						style={{
							margin: "16px 0 -12px 0",
							lineHeight: "27px",
							opacity: "0.5",
						}}
					>
						{data.address}
					</div>
					<div
						style={{
							margin: "24px 0 -8px 0",
							color: "#61b15a",
						}}
					>
						Payment Method
					</div>
					<div
						style={{
							margin: "16px 0 -8px 0",
							opacity: "0.5",
						}}
					>
						{data.payment}
					</div>
					<div
						style={{
							margin: "24px 0 -8px 0",
							color: "#61b15a",
						}}
					>
						Total
					</div>
					<div
						style={{
							margin: "16px 0 -8px 0",
							opacity: "0.5",
						}}
					>
						Rp{data.total.toLocaleString()}
					</div>
					<div
						style={{
							margin: "24px 0 -8px 0",
							color: "#61b15a",
						}}
					>
						Item
					</div>
					<div
						style={{
							margin: "16px 0 -8px 0",
							opacity: "0.5",
							fontStyle: "italic",
							cursor: "pointer",
						}}
						onClick={toggleModal}
					>
						Show item
					</div>
					<div
						style={{
							margin: "24px 0 0 0",
							lineHeight: "27px",
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<Button
							onClick={() => {
								dispatch(
									reorder({
										accountId,
										transactionId: data.id,
									})
								);
							}}
						>
							Reorder
						</Button>
					</div>
				</div>
			</div>
			<TransactionItemModal
				showItem={showItem}
				toggleModal={toggleModal}
				items={data.items}
			/>
		</>
	);
};

export default TransactionDetailCard;

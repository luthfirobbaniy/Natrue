import React from "react";

const TransactionCard = ({
	cardColor,
	date,
	onClick,
	status,
	time,
	total,
	transactionCode,
}) => {
	return (
		<div
			style={{
				backgroundColor: cardColor,
				height: "92.43px",
				display: "flex",
				fontWeight: "bold",
				boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
			}}
			onClick={onClick}
		>
			<div
				style={{
					// backgroundColor: "pink",
					width: "243px",
					display: "flex",
					flexDirection: "column",
					padding: "24px 0	",
					boxSizing: "border-box",
				}}
			>
				<div
					style={{
						// backgroundColor: "red",
						height: "100%",
						borderRight: "1px solid rgba(0, 0, 0, 0.25)",
						padding: "0 24px",
					}}
				>
					<div
						style={{
							margin: "-6px 0 -10px 0",
							fontSize: "24px",
							color: "#61b15a",
						}}
					>
						{transactionCode}
					</div>
					<div
						style={{
							margin: "16px 0 0 0",
							opacity: "0.5",
						}}
					>
						{date} ({time})
					</div>
				</div>
			</div>
			<div
				style={{
					// backgroundColor: "yellow",
					width: "131px",
					textAlign: "center",
					lineHeight: "27px",
					padding: "24px 0",
					boxSizing: "border-box",
					display: "flex",
				}}
			>
				<div
					style={{
						// backgroundColor: "red",
						height: "100%",
						width: "131px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "0 24px",
						borderRight: "1px solid rgba(0, 0, 0, 0.25)",
					}}
				>
					<div
						style={{
							opacity: "0.5",
						}}
					>
						{status}
					</div>
				</div>
			</div>
			<div
				style={{
					// backgroundColor: "pink",
					width: "166px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "24px",
					boxSizing: "border-box",
				}}
			>
				<div
					style={{
						opacity: "0.5",
					}}
				>
					Rp{total.toLocaleString()}
				</div>
			</div>
		</div>
	);
};

export default TransactionCard;

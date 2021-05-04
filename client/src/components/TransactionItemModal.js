import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from ".";
import TransactionItemCard from "./TransactionItemCard";

const TransactionItemModal = ({ showItem, toggleModal, items }) => {
	const classes = useStyles();

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={showItem}
				onClose={toggleModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={showItem}>
					<div className={classes.paper}>
						<div
							style={{
								fontSize: "36px",
								fontWeight: "bold",
								margin: "0 0 -9px 0",
							}}
						>
							Item List
						</div>
						<div
							style={{
								margin: "36px 0 36px 0",
								maxHeight: "200px",
								overflow: `${items.length > 1 ? "scroll" : "visible"}`,
							}}
						>
							{items.map((val) => {
								return (
									<div
										style={{
											margin: "24px 0 24px 0",
										}}
									>
										<TransactionItemCard
											category={val.category}
											imagepath={val.imagepath}
											name={val.name}
											price={val.price}
											quantity={val.quantity}
										/>
									</div>
								);
							})}
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<Button onClick={toggleModal}>Close</Button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: "white",
		outline: "none",
		padding: "60px",
		width: "66vw",
		maxWidth: "980px",
		boxSizing: "border-box",
		fontFamily: "Roboto, sans-serif",
	},
}));

export default TransactionItemModal;

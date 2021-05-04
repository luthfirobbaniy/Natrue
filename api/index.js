const express = require("express");
const cors = require("cors");
const bearerToken = require("express-bearer-token");

const {
	authRouter,
	addressRouter,
	cartRouter,
	inventoryRouter,
	paymentRouter,
	productRouter,
	transactionRouter,
	walletRouter,
} = require("./routers");

const app = express();
const port = 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cors());

app.use(bearerToken());

app.get("/", (req, res) => {
	res.status(200).send("<h1>NATRUE API</h1>");
});

app.use("/auth", authRouter);
app.use("/address", addressRouter);
app.use("/cart", cartRouter);
app.use("/inventory", inventoryRouter);
app.use("/payment", paymentRouter);
app.use("/product", productRouter);
app.use("/transaction", transactionRouter);
app.use("/wallet", walletRouter);

app.listen(port, () => console.log("API ACTIVE"));

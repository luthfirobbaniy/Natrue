import React, { useEffect } from "react";
import "./App.css";
import { Button, NavBar } from "./components";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import {
	LandingPage,
	ProductFeedPage,
	ProductDetailPage,
	CartPage,
	TransactionPage,
	LoginPage,
} from "./pages";
import ToTop from "./components/ToTop";
import { useDispatch } from "react-redux";
import { keepLogin } from "./redux/actions";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(keepLogin());
	}, []);

	return (
		<ToTop>
			<div className="app" id="a">
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							// backgroundColor: "brown",
							width: "1440px",
						}}
					>
						<NavBar />
						<Route exact path="/" component={LandingPage} />
						<Route path="/product/:category" component={ProductFeedPage} />
						<Route path="/product-detail" component={ProductDetailPage} />
						<Route path="/cart" component={CartPage} />
						<Route path="/transaction" component={TransactionPage} />
						<Route path="/login" component={LoginPage} />
						<Route path="/abc/:a" component={Content} />
						<Route path="/page-not-found/:a" component={NotFound} />
					</div>
				</div>
			</div>
		</ToTop>
	);
};

const Content = (props) => {
	if (!props.match.isExact)
		return <Redirect to={`/page-not-found${props.location.pathname}`} />;
	return <div>Content</div>;
};

const NotFound = (props) => {
	console.log(props.match);
	return <div>404 - PAGE NOT FOUND</div>;
};

export default App;

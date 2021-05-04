import React, { useEffect } from "react";
import { withRouter } from "react-router";

const ToTop = ({ children, location }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return <div>{children}</div>;
};

export default withRouter(ToTop);

import React from "react";
import Header from "./Header";

export default function HeaderOnly({ children }) {
	return (
		<div>
			<Header />
			<div className="container">
				<div className="content">{children}</div>
			</div>
		</div>
	);
}

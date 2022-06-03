import React from "react";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

export default function MenuItem({ data, onClick }) {
	const classes = cx("menu-item", {
		separate: data.separate,
	});

	return (
		<Button
			className={classes}
			to={data.to}
			leftIcon={data.icon}
			onClick={onClick}
		>
			{data.title}
		</Button>
	);
}

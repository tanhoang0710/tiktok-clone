import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Button({
	to,
	href,
	primary = false,
	outline = false,
	text = false,
	rounded = false,
	disabled = false,
	small = false,
	large = false,
	children,
	className,
	leftIcon,
	rightIcon,
	onClick,
	...passProps
}) {
	let Comp = "button";
	const props = {
		onClick,
		...passProps,
	};

	if (disabled) {
		// delete props.onClick;
		Object.keys(props).forEach((key) => {
			if (key.startsWith("on") && typeof props[key] === "function") {
				delete props[key];
			}
		});
	}

	if (to) {
		props.to = to;
		Comp = <Link />;
	} else if (href) {
		props.href = href;
		Comp = "a";
	}

	const classes = cx("wrapper", {
		primary,
		outline,
		small,
		large,
		text,
		disabled,
		rounded,
		[className]: className,
	});

	return (
		<Comp className={classes} {...props}>
			{leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
			<span className={cx("title")}>{children}</span>
			{rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
		</Comp>
	);
}

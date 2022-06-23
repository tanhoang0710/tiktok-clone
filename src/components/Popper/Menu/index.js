import Tippy from "@tippyjs/react/headless";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const defaultFn = () => {};

export default function Menu({
	children,
	items = [],
	onChange = defaultFn,
	hideOnClick = false,
}) {
	const [history, setHistory] = useState([{ data: items }]);
	const current = history[history.length - 1];

	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children;
			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory((prev) => [...prev, item.children]);
						} else {
							onChange(item);
						}
					}}
				/>
			);
		});
	};

	return (
		<Tippy
			render={(attrs) => (
				<div className={cx("menu-list")} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx("menu-popper")}>
						{history.length > 1 && (
							<Header
								title={current.title}
								onBack={() => {
									setHistory((prev) =>
										prev.slice(0, prev.length - 1)
									);
								}}
							/>
						)}
						<div className={cx("menu-body")}>{renderItems()}</div>
					</PopperWrapper>
				</div>
			)}
			delay={[0, 800]}
			interactive
			placement="bottom-end"
			onHide={() => {
				setHistory((prev) => prev.slice(0, 1));
			}}
			offset={[12, 8]}
			hideOnClick={hideOnClick}
		>
			{children}
		</Tippy>
	);
}

Menu.propTypes = {
	children: PropTypes.node.isRequired,
	items: PropTypes.array,
	onChange: PropTypes.func,
	hideOnClick: PropTypes.bool,
};

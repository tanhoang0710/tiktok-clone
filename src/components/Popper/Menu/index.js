import Tippy from "@tippyjs/react/headless";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

export default function Menu({ children, items = [] }) {
	const renderItems = () => {
		return items.map((item, index) => <MenuItem key={index} data={item} />);
	};

	return (
		<Tippy
			render={(attrs) => (
				<div className={cx("menu-list")} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx("menu-popper")}>
						<h2>{renderItems()}</h2>
					</PopperWrapper>
				</div>
			)}
			delay={[0, 800]}
			interactive
			placement="bottom-end"
		>
			{children}
		</Tippy>
	);
}

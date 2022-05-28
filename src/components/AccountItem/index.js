import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function AccountItem() {
	return (
		<div>
			<div className={cx("wrapper")}>
				<img
					className={cx("avatar")}
					src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/466c70fb9e094cd8ffad1a3e39155a22~c5_300x300.webp?x-expires=1653890400&x-signature=NF0XvW4Y4IGtqMZYa1wco8oiqxQ%3D"
					alt=""
				/>
				<div className={cx("info")}>
					<h4 className={cx("name")}>
						<span>Nguyen Van A</span>
						<FontAwesomeIcon
							className={cx("check")}
							icon={faCheckCircle}
						/>
					</h4>
					<span className={cx("username")}>nguyenvana</span>
				</div>
			</div>
		</div>
	);
}

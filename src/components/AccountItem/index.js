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
					src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/21a2ca55ee14646d564526cf49fff838~c5_100x100.jpeg?x-expires=1654149600&x-signature=de6poaxFEkJksfk%2BVm2SreTqOI0%3D"
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

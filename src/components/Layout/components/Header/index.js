import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisVertical,
	faEarthAsia,
	faCircleQuestion,
	faKeyboard,
	faCoins,
	faGear,
	faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

import routesConfig from "~/config/routes";

import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faUber } from "@fortawesome/free-brands-svg-icons";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: "English",
		children: {
			title: "Language",
			data: [
				{
					type: "language",
					code: "en",
					title: "English",
				},
				{
					code: "vi",
					title: "Tiếng Việt",
					type: "language",
				},
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: "Feedback and help",
		to: "/feedback",
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: "Keyboard shortcuts",
	},
];

function Header() {
	const currentUser = true;

	// handle logic
	const handleMenuChange = (menuItem) => {
		console.log(menuItem);
	};

	const userMenu = [
		{
			icon: <FontAwesomeIcon icon={faUber} />,
			title: "View Profile",
			to: "/@chungthanh",
		},
		{
			icon: <FontAwesomeIcon icon={faCoins} />,
			title: "Get coins",
			to: "/coin",
		},
		{
			icon: <FontAwesomeIcon icon={faGear} />,
			title: "Settings",
			to: "/settings",
		},
		...MENU_ITEMS,
		{
			icon: <FontAwesomeIcon icon={faSignOut} />,
			title: "Log out",
			to: "/logout",
			separate: true,
		},
	];

	return (
		<header className={cx("wrapper")}>
			<div className={cx("inner")}>
				<div className={cx("logo")}>
					<Link to={routesConfig.home} className={cx("logo-link")}>
						<img src={images.logo} alt="Tiktok" />
					</Link>
				</div>
				{/* Search */}
				<Search />
				<div className={cx("actions")}>
					{currentUser ? (
						<>
							<Tippy
								delay={[0, 50]}
								content="Upload video"
								placement="bottom"
							>
								<button className={cx("action-btn")}>
									<UploadIcon />
								</button>
							</Tippy>
							<Tippy
								delay={[0, 50]}
								content="Message"
								placement="bottom"
							>
								<button className={cx("action-btn")}>
									<MessageIcon />
								</button>
							</Tippy>
							<Tippy
								delay={[0, 50]}
								content="Inbox"
								placement="bottom"
							>
								<button className={cx("action-btn")}>
									<InboxIcon />
									<span className={cx("badge")}>12</span>
								</button>
							</Tippy>
						</>
					) : (
						<>
							<Button text>Upload</Button>
							<Button primary>Login</Button>
						</>
					)}
					<Menu
						items={currentUser ? userMenu : MENU_ITEMS}
						onChange={handleMenuChange}
					>
						{currentUser ? (
							<Image
								src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a6fb3b392232ae2da01dbd96e16c1714.jpeg?x-expires=1654408800&x-signature=2F%2BT21phk82eZ5BpQ2G4VM8lvf8%3D"
								alt=""
								className={cx("user-avatar")}
								// fallback="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
							/>
						) : (
							<button className={cx("more-button")}>
								<FontAwesomeIcon icon={faEllipsisVertical} />
							</button>
						)}
					</Menu>
				</div>
			</div>
		</header>
	);
}

export default Header;

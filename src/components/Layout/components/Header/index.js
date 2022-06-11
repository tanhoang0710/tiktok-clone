import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faSpinner,
	faMagnifyingGlass,
	faEllipsisVertical,
	faEarthAsia,
	faCircleQuestion,
	faKeyboard,
	faCoins,
	faGear,
	faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { useEffect, useState } from "react";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faUber } from "@fortawesome/free-brands-svg-icons";
import { UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";

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
	const [searchResult, setSearchResult] = useState([]);
	const currentUser = true;

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([]);
		}, 0);
	}, []);

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
					<img src={images.logo} alt="Tiktok" />
				</div>
				<HeadlessTippy
					render={(attrs) => (
						<div
							className={cx("search-result")}
							tabIndex="-1"
							{...attrs}
						>
							<PopperWrapper>
								<h4 className={cx("search-title")}>Accounts</h4>
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
							</PopperWrapper>
						</div>
					)}
					visible={searchResult.length > 0}
					interactive
				>
					<div className={cx("search")}>
						<input
							type="text"
							placeholder="Search accounts and videos"
							spellCheck={false}
						/>
						<button className={cx("clear")}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
						<FontAwesomeIcon
							className={cx("loading")}
							icon={faSpinner}
						/>
						<button className={cx("search-btn")}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</HeadlessTippy>
				<div className={cx("actions")}>
					{currentUser ? (
						<>
							<Tippy
								content="Upload video"
								placement="bottom"
								delay={[0, 200]}
							>
								<button className={cx("action-btn")}>
									<UploadIcon />
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

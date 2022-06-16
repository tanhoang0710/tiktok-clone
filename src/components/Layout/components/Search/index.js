import React, { useEffect, useRef, useState } from "react";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);

export default function Search() {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);
	const [loading, setLoading] = useState(false);

	// 1: ''
	// 2: 'h'
	// 3: 'ho'
	// 4: 'hoa'
	const debounced = useDebounce(searchValue, 500);

	const inputRef = useRef();

	useEffect(() => {
		if (!debounced.trim()) {
			setSearchResult([]);
			return;
		}

		setLoading(true);
		fetch(
			`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
				debounced
			)}&type=less`
		)
			.then((res) => res.json())
			.then((res) => {
				setSearchResult(res.data);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, [debounced]);

	const handleClear = () => {
		setSearchValue("");
		setSearchResult([]);
		inputRef.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};

	return (
		<>
			<HeadlessTippy
				render={(attrs) => (
					<div
						className={cx("search-result")}
						tabIndex="-1"
						{...attrs}
					>
						<PopperWrapper>
							<h4 className={cx("search-title")}>Accounts</h4>
							{searchResult.map((result) => (
								<AccountItem key={result.id} data={result} />
							))}
						</PopperWrapper>
					</div>
				)}
				visible={showResult && searchResult.length > 0}
				interactive
				onClickOutside={handleHideResult}
			>
				<div className={cx("search")}>
					<input
						type="text"
						placeholder="Search accounts and videos"
						spellCheck={false}
						onChange={(e) => setSearchValue(e.target.value)}
						value={searchValue}
						ref={inputRef}
						onFocus={() => setShowResult(true)}
					/>
					{!!searchValue && !loading && (
						<button className={cx("clear")} onClick={handleClear}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					)}
					{loading && (
						<FontAwesomeIcon
							className={cx("loading")}
							icon={faSpinner}
						/>
					)}
					<button className={cx("search-btn")}>
						<SearchIcon />
					</button>
				</div>
			</HeadlessTippy>
		</>
	);
}

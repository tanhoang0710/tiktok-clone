import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

export default function AccountItem() {
	const renderPreview = (props) => {
		return (
			<div tabIndex="-1" {...props}>
				<PopperWrapper>
					<AccountPreview />
				</PopperWrapper>
			</div>
		);
	};

	return (
		<div>
			<Tippy
				interactive
				delay={[800, 0]}
				render={renderPreview}
				placement="bottom"
				offset={[-20, 0]}
			>
				<div className={cx('account-item')}>
					<img
						src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661400000&x-signature=bq%2BSrojbX1PrFp3%2FSE7cdT7l3jc%3D"
						alt=""
						className={cx('avatar')}
					/>
					<div className={cx('item-info')}>
						<p className={cx('nickname')}>
							<strong>quocnguyenphu</strong>
							<FontAwesomeIcon
								icon={faCheckCircle}
								className={cx('check')}
							/>
						</p>
						<p className={cx('name')}>Quốc Nguyễn Phú</p>
					</div>
				</div>
			</Tippy>
		</div>
	);
}

AccountItem.propTypes = {};

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

export default function AccountItem() {
	return (
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
	);
}

AccountItem.propTypes = {};

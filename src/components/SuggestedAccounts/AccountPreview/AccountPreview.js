import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function AccountPreview() {
	return (
		<div className={cx('wrapper')}>
			<header className={cx('header')}>
				<img
					src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661400000&x-signature=bq%2BSrojbX1PrFp3%2FSE7cdT7l3jc%3D"
					className={cx('avatar')}
					alt=""
				/>
				<Button primary className={cx('follow-btn')}>
					Follow
				</Button>
			</header>
			<div className={cx('body')}>
				<p className={cx('nickname')}>
					<strong>quocnguyenphu</strong>
					<FontAwesomeIcon
						icon={faCheckCircle}
						className={cx('check')}
					/>
				</p>
				<p className={cx('name')}>Quốc Nguyễn Phú</p>
				<p className={cx('analytics')}>
					<strong className={cx('value')}>8.2M </strong>
					<span className={cx('label')}>Followers</span>
					<strong className={cx('value')}>8.2M </strong>
					<span className={cx('label')}>Likes</span>
				</p>
			</div>
		</div>
	);
}

import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch } from 'react-icons/bs';
import styles from './Dashboard.module.css';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<input type="text" className={styles.searchInput} placeholder="Search..." />
				<BsSearch className={styles.icon} />
			</div>
			<div className={styles.headerRight}>
				<BsFillBellFill className={styles.icon} />
				<BsFillEnvelopeFill className={styles.icon} />
				<BsPersonCircle className={styles.icon} />
			</div>
		</header>
	);
};

export default Header;

import React from 'react';
import { HiBell } from "react-icons/hi2";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from '../../routes/Dashboard/Dashboard.module.css';
import ProfilePic from '../../assets/Goku.png'; // Import profile picture

const DashboardLanding: React.FC = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.topBar}>
                <h1 className={styles.dashboardTitle}>Welcome Athlete!</h1>
                <div className={styles.searchAndIcons}>
                    <div className={styles.searchContainer}>
                        <FaMagnifyingGlass className={styles.searchIcon} />
                        <input type="search" className={styles.searchInput} placeholder="Search" />
                    </div>
                    <HiBell className={styles.bellIcon} />
                    <div className={styles.profileIcon} style={{ backgroundImage: `url(${ProfilePic})` }}></div>  
                </div>
            </div>
            <div className={styles.powerCurveWindow}>
                <h3 className={styles.componentText}>Power Curve</h3>
                <p className={styles.componentText}>Graph and data representing the power curve go here maybe?</p>
            </div>
            <div className={styles.sideBySideComponents}>
                <div className={styles.componentWindow}>
                    <h3 className={styles.componentText}>VO2 Max</h3>
                    <p className={styles.componentText}>Detailed VO2 Max data here.</p>
                </div>
                <div className={styles.componentWindow}>
                    <h3 className={styles.componentText}>Performance Tips</h3>
                    <p className={styles.componentText}>Performance enhancement tips here.</p>
                </div>
            </div>
        </main>
    );
};

export default DashboardLanding;
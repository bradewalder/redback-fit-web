import React from 'react';
import { HiBell } from "react-icons/hi2";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
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
            <div className={styles.powerCalSection}>
                <div className={styles.powerCurveWindow}>
                    <h3 className={styles.componentText}>Power Curve</h3>
                    <p className={styles.componentText}>Graph and data representing the power curve go here maybe?</p>
                </div>
                <div className={styles.calV02Box}>
                    <div className={styles.calendarWindow}>
                        <FaCalendarAlt className={styles.calIcon} />
                        <h3 className={styles.calendarWindowText}>Day name</h3>
                        <p className={styles.calendarWindowText}>Date will go here</p>
                    </div>
                    <div className={styles.v02Window}>
                        <h3 className={styles.componentText}>V02 Max</h3>
                    </div>
                </div>
            </div>
            <div className={styles.sideBySideComponents}>
                <div className={styles.componentWindow}>
                    <h3 className={styles.componentText}>Sessions Profile</h3>
                    <p className={styles.componentText}>Coach and Session Details here.</p>
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
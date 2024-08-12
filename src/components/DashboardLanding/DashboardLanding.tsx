import React from 'react';
import styles from '../../routes/Dashboard/Dashboard.module.css';

const DashboardLanding: React.FC = () => {
    return (
        <main className={styles.mainContainer}>
            <h1 className={styles.dashboardTitle}>Welcome Athlete</h1>  {/* Added title */}
            <div className={styles.componentWindow}>
                <h3 className={styles.componentText}>Component Title</h3>
                <p className={styles.componentText}>Detailed content or widgets can go here.</p>
            </div>
            {/* Additional components can be added similarly */}
            <div className={styles.componentWindow}>
                <h3 className={styles.componentText}>Another Component</h3>
                <p className={styles.componentText}>More content or functionality can be placed here.</p>
            </div>
        </main>
    );
};

export default DashboardLanding;

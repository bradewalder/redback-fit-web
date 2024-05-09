import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import styles from './Dashboard.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>
        Redback Operations
      </div>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarListItem}><BsGrid1X2Fill /> Dashboard</li>
        <li className={styles.sidebarListItem}><BsFillArchiveFill /> Features</li>
        <li className={styles.sidebarListItem}><BsFillGrid3X3GapFill /> Categories</li>
        <li className={styles.sidebarListItem}><BsMenuButtonWideFill /> Reports</li>
        <li className={styles.sidebarListItem}><BsFillGearFill /> Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

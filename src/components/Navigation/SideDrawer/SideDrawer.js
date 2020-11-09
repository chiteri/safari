import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <div className={styles.SideDrawer}>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.module.css';

const navigationItems = () => (
    <ul>
        <NavigationItem link="/" active> Dash</NavigationItem>
        <NavigationItem link="/trips/"> Trips</NavigationItem>
        <NavigationItem link="/profile/"> Profile</NavigationItem>
        <NavigationItem link="/logout/"> Logout</NavigationItem>
    </ul>
);

export default navigationItems;
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.module.css';

const toolbar = (props) => (
    <header>
        <h1>Safiri</h1>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
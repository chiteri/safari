import React from 'react';
import './Toolbar.module.css';

const toolbar = (props) => (
    <header>
        <h1>Safiri</h1>
        <nav>
            <ul>
                <li><a href="#">Dash</a></li>
                <li><a href="#">Trips</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </header>
);

export default toolbar;
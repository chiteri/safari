import React, {Component} from 'react';
import './SideBar.module.css';

const sidebar = (props) => (
    <section>
        <div>
            <label for="from"></label>
            <input type="text" id="from" placeholder="From"></input>
        </div>

        <div>
            <label for="to"></label>
            <input type="text" id="to" placeholder="Destination"></input>
        </div>

        <div>
            <button id="request">Request</button>
            <button id="cancel">Cancel</button>
        </div>
    </section>
);

export default sidebar;
import React, {Component} from 'react';
import styles from './SideBar.module.css';

class SideBar extends Component {
    render() {
        return (
            <section className={styles.SideBar}>                    
                <div><input type="text" id="from" placeholder="From" /> </div>
                <div><input type="text" id="to" placeholder="Destination" /> </div>
                <button id="request">Request</button>
                <button id="cancel">Cancel Ride</button>
                <h3> Ride Hailing</h3>
                <ul> 
                    <li>Dash</li>
                    <li>Trips</li>
                    <li>Profile</li>
                </ul>
            </section>
        );
    }
}

export default SideBar;
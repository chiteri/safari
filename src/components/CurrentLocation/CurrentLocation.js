import React, {Component} from 'react';
import styles from './CurrentLocation.module.css';

class CurrentLocation extends Component {
    render () {
        return (
            <section className={styles.View}>
                <div className={styles.Map}>
                    <p> Location details </p>
                </div>
            </section>
        );
    }
}

export default CurrentLocation;
import React from 'react';
import Aux from '../../hoc/Auxilliary';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
       <nav> <h1> Safari </h1></nav> 
       <main className={styles.Container}>
            {props.children}
       </main>
    </Aux>

);

export default layout;
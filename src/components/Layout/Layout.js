import React from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
       <nav> <h1> Safari </h1></nav> 
       <main className={classes.Container}>
            {props.children}
       </main>
    </Aux>

);

export default layout;
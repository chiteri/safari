import React from 'react';
import './Layout.module.css';
import Aux from '../../hoc/Auxilliary';

const layout = (props) => (
    <Aux>
        <header><h1>Safari</h1></header>
        <nav>NAV</nav>
        <main>
            {props.children}
        </main>
        <aside>ASIDE</aside>
        <footer> 
            <hr /> All rights reserved, MMXX&copy; </footer>
    </Aux>

);

export default layout;
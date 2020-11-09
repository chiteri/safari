import React from 'react';
import './Layout.module.css';
import Aux from '../../hoc/Auxilliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideBar from '../SideBar/SideBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar />  
        <SideDrawer />       
        <SideBar />
        <main>
            {props.children}
        </main>
        <aside>
            <p>ASIDE</p>
        </aside>
        <footer> 
            <hr /> 
            <p> All rights reserved, MMXX&copy; </p>
        </footer>
    </Aux>

);

export default layout;
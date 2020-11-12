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
            <p>MESSAGES</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum lacinia dolor non auctor. </p>
            <p> Proin tempor pharetra sollicitudin. Etiam mattis eros quis turpis convallis, eget maximus neque elementum. </p>
        </aside>
    </Aux>

);

export default layout;
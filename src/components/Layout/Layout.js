import React from 'react';
import './Layout.module.css';
import Aux from '../../hoc/Auxilliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />            
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
        <main>
            {props.children}
        </main>
        <aside>
            <p>ASIDE</p>
        </aside>
        <footer> 
            <hr /> All rights reserved, MMXX&copy; </footer>
    </Aux>

);

export default layout;
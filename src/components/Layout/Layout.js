import React from 'react';
import './Layout.module.css';
import Aux from '../../hoc/Auxilliary';

const layout = (props) => (
    <Aux>
        <header><h1>Safari</h1></header>
        <nav>
            <ul>
                <li>Dash</li>
                <li>Trip</li>
                <li>Profile</li>
            </ul>
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
            
        </nav>
        
        <main>
            {props.children}
        </main>
        <aside>ASIDE</aside>
        <footer> 
            <hr /> All rights reserved, MMXX&copy; </footer>
    </Aux>

);

export default layout;
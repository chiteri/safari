import React from 'react';
import './Layout.module.css';
import Aux from '../../hoc/Auxilliary';

const layout = (props) => (
    <Aux>
        <header>
            <h1>Safiri</h1>
            <nav>
                <ul>
                    <li><a href="#">Dash</a></li>
                    <li><a href="#">Trips</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
        </header>            
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
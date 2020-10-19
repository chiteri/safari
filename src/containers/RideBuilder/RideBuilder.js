import React, {Component} from 'react';
import Aux from '../../hoc/Auxilliary';

class RideBuilder extends Component {
    render() {
        return (
            <Aux>
                <section>
                    <h3> Ride Hailing</h3>
                    <div><input type="text" id="from" placeholder="From" /> </div>
                    <div><input type="text" id="to" placeholder="Destination" /> </div>
                    <ul> 
                        <li>Dash</li>
                        <li>Trips</li>
                        <li>Profile</li>
                    </ul>
                </section>

                <section>
                    <div class="map">
                        <p> Request a ride?</p>
                    </div>

                </section>
            </Aux>
        );
    }
}

export default RideBuilder;
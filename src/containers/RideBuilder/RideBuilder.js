import React, {Component} from 'react';
import Aux from '../../hoc/Auxilliary';
import MapContainer from '../../components/MapContainer/MapContainer';

class RideBuilder extends Component {
    render() {
        return (
            <Aux>
                <MapContainer />
            </Aux>
        );
    }
}

export default RideBuilder;
import React, {Component} from 'react';
import Aux from '../../hoc/Auxilliary';
import MapContainer from '../MapContainer/MapContainer';
// import SideBar from '../../components/Layout/SideBar/SideBar';

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
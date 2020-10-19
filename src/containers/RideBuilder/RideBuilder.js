import React, {Component} from 'react';
import Aux from '../../hoc/Auxilliary';
import CurrentLocation from '../../components/CurrentLocation/CurrentLocation';
import SideBar from '../../components/SideBar/SideBar';

class RideBuilder extends Component {
    render() {
        return (
            <Aux>
                <SideBar />
                <CurrentLocation />
            </Aux>
        );
    }
}

export default RideBuilder;
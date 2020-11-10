import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import RideMap from '../RideMap/RideMap';

class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props, 
            activeMarker:  marker,
            showingInfoWindow: true
        });
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    render() {
        return (
          <RideMap
            centerAroundCurrentLocation
            google={this.props.google}
          >
            <Marker onClick={this.onMarkerClick} name={'Current Location'} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </RideMap>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'GOOGLE_MAPS_API_KEY_HERE'
  })(MapContainer);
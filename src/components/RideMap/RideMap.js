import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxilliary';
import Geocode from 'react-geocode';
import PlacesAutocomplete from 'react-google-autocomplete';
import styles from './RideMap.module.css';

Geocode.setApiKey('GOOGLE_MAPS_API_KEY_HERE');
Geocode.enableDebug();

class RideMap extends Component {
    constructor(props) {
        super(props);
        const {lat, lng} = this.props.initialCenter;

        // State 
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }, 
            pickup: null, 
            destination: null
        };
    }

    // STEP 1) Happens when the map is first loaded
    componentDidUpdate(prevProps, prevState) {
      // Check whether the map API is available
      if (prevProps.google !== this.props.google) {
        this.loadMap(); // Let the map update
      }
      // Check for an update to the currentLocation in the state after the component itself is updated
      if (prevState.currentLocation !== this.state.currentLocation) {
        this.recenterMap();
      }
    }

    // Function called when the currentLocation in the map component's state is updated
    recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;
    
        if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
        }
    }

    // STEP 2) Case when the map is available when component mounts
    componentDidMount() {
      // The map has previously been loaded in our app
      if (this.props.centerAroundCurrentLocation) {
        // Use the current location of the user 
        if (navigator && navigator.geolocation) {
          // Fetch the current position
          navigator.geolocation.getCurrentPosition(pos => {
            // Update the state of our map component using this position object
            const coords = pos.coords;
            this.setState({
              currentLocation: {
                lat: coords.latitude,
                lng: coords.longitude
              },
            });
          });
        }
      }
      this.loadMap();
    }

    // Function to get any of our maps on the page
    // This function is only called after the component has been
    // rendered (i.e there is a DOM component on the page)
    loadMap() {
      // checks if google API is available
      if (this.props && this.props.google) {
        const { google } = this.props;
        const maps = google.maps;
  
        const mapRef = this.refs.map;
  
        // Obtain a reference to the actual DOM element to place map in
        const node = ReactDOM.findDOMNode(mapRef); // (This is not a virtual DOM element)
  
        let { zoom } = this.props;
        const { lat, lng } = this.state.currentLocation;
        const center = new maps.LatLng(lat, lng);
  
        const mapConfig = Object.assign(
          {},
          {
            center: center,
            zoom: zoom, // How close to the center we should display
            style: styles.Map
          }
        );
  
        // maps.Map() constructor accepts a DOM node and a configurator object to create map
        this.map = new maps.Map(node, mapConfig);
      }
    }

    // Allow the component to also call lifecycle methods of its children  
    renderChildren() {
      const { children } = this.props;
  
      if (!children) return; // No children have been passed to map instance
  
      return React.Children.map(children, c => {
        if (!c) return;
        
        // Create clones of children to display on map
        return React.cloneElement(c, {
          map: this.map,
          google: this.props.google,
          mapCenter: this.state.currentLocation
        });
      });
    }

    // Allow the component to place map on page
    render() {
      const style = Object.assign({}, styles.Map);
    
        return (
          <Aux>
            <div style={styles} ref="map">
              
              {this.renderChildren()}
            </div>
            <div>
              {/* For Auto complete Search Box, "From" */}
              <PlacesAutocomplete
                style={{width: '35%', marginTop: '15px'}}
                placeholder='Pickup location'
                onPlaceSelected={(place) => {
                  this.setState({pickup: 
                    {address: place.formatted_address, 
                      lat: place.geometry.location.lat(), 
                      lng: place.geometry.location.lng()}});
                  console.log('[Pickup] '+this.state.pickup.address);
                }}
                location={[this.state.currentLocation.lat, this.state.currentLocation.lng ]}
                radius={10000}
                types={['(regions)']}
                componentRestrictions={{country: "ca"}}
              />

            {/* For Auto complete Search Box, "To" */}
            <PlacesAutocomplete
                style={{width: '35%', marginTop: '15px'}}
                placeholder='Destination'
                onPlaceSelected={(place) => {
                  this.setState({destination: 
                    {address: place.formatted_address, 
                      lat: place.geometry.location.lat(), 
                      lng: place.geometry.location.lng()}});
                  console.log('[Destination] '+this.state.destination.address);
                }}
                types={['(regions)']}
                componentRestrictions={{country: "ca"}}
            />
            <button id="request">Request</button>
              
            </div>
          </Aux>
        );
    }

    /**
    * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
    *
    * @param nextProps
    * @param nextState
    * @return {boolean}
    */
    shouldComponentUpdate( nextProps, nextState ){
      if (this.state.currentLocation !== nextState.currentLocation ||
          this.state.address !== nextState.address) {
        return true;
      } else if (this.state.currentLocation === nextProps.currentLocation) {
        return false;
      }
    } 

    /**
      * And function for city,state and address input
      * @param event
      */
    onChange = ( event ) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    /**
    * When the user types an address in the search box
    * @param place
    */
    onPlaceSelected = ( place ) => {
      const address = place.formatted_address,
      addressArray =  place.address_components,
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng(); // Set these values in the state 

      this.setState({
        destination: ( addressArray ) ? addressArray : ''
      });
    }

    getAddress (selectedLocation) {
      let address = '';
      // Get the current address from the default map position and update state
      Geocode.fromLatLng( selectedLocation.lat , selectedLocation.lng ).then(
        response => {
         address = response.results[0].formatted_address;
       
         console.log( '[getAddress] Address is: ', address );
       
         /* this.setState( {
          address: ( address ) ? address : ''
         } ) */
        },
        error => {
         console.error(error);
        }
       );

       return address;
    }

}

// Define some default properties in case they are not passed
RideMap.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object, 
  centerAroundCurrentLocation: PropTypes.bool,
  visible: PropTypes.bool
};

RideMap.defaultProps = {
    zoom: 10,
    // Edmonton by default
    initialCenter: {
      lat: 53.5461,
      lng: 113.4938
    },
    centerAroundCurrentLocation: false,
    visible: true
}; 

export default RideMap;
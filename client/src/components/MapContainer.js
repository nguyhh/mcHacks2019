import React from "react";
import TheMap from "../components/TheMap";

export default class MapContainer extends React.Component {

	render() {
		return (
			<TheMap
				doctors={this.props.doctors}
				googleMapURL={'https://maps.google.com/maps/api/js?key=AIzaSyAa1ufgJXBpRiujdgAk22Fv7UOEjINbYJo'}
				loadingElement={<div style={{ height: '100%' }} />}
				containerElement={<div style={{ height: '600px', width: '600px' }} />}
				mapElement={<div style={{ height: '100%' }} />}
			/>
		);
	}
}
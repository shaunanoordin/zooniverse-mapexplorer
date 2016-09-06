import React from 'react';
import L from 'leaflet';

export default class About extends React.Component {
  componentDidMount() {
    var map = this.map = L.map(React.findDOMNode(this), {
      minZoom: 2,
      maxZoom: 20,
      layers: [
      L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
      ],
      attributionControl: false,
    });

    map.fitWorld();
  }
  
  render() {
    console.log(L);

    return (
      <div className="map"></div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import Explanation from './Map-1-Explanation';

export default class Map1 extends React.Component {
  componentDidMount() {
    this.initialiseMap();
  }
  
  initialiseMap() {
    const map = L.map(ReactDOM.findDOMNode(this.refs.mapVisuals), {
      center: [51.7520, -1.2577],
      zoom: 12,
      layers: [
        L.tileLayer(
          '//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
          { attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }
        )
      ],
      attributionControl: true,
    });
  }
  
  render() {
    return (
      <div ref="map" className="map">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css" />
        <div ref="mapVisuals" className="map-visuals"></div>
        <Explanation />
      </div>
    );
  }
}

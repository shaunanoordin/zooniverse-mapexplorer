import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import Explanation from './Explanation.jsx';

export default class Index extends React.Component {
  componentDidMount() {
    const myMap = L.map(ReactDOM.findDOMNode(this.refs.mapVisuals), {
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
      <div className="map">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
        <div ref="mapVisuals" className="map-visuals"></div>
        <Explanation />
      </div>
    );
  }
}

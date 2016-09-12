import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import Explanation from './Explanation.jsx';
const gorongosaGeoJSON = require('./gorongosa.json');

export default class Index extends React.Component {
  componentDidMount() {
    const myMap = L.map(ReactDOM.findDOMNode(this.refs.mapVisuals), {
      center: [-18.8, 34.4],
      zoom: 9,
      layers: [
        L.tileLayer(
          '//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
          { attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }
        )
      ],
      attributionControl: true,
    });
    
    const gorongosaOptions = {
      style: {
        color: '#fc3',
        opacity: 1,
        fillOpacity: 0,
        clickable: false,
        weight: 5
      }
    };
    const gorongosaLayer = L.geoJson(gorongosaGeoJSON, gorongosaOptions);
    gorongosaLayer.addTo(myMap);
  }
  
  render() {
    return (
      <div className="map">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css" />
        <div ref="mapVisuals" className="map-visuals"></div>
        <Explanation />
      </div>
    );
  }
}

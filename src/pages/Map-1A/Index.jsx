import React from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import Explanation from './Explanation.jsx';

export default class Index extends React.Component {
  componentDidMount() {
    const myMap = (
      <Map center={[51.7520, -1.2577]} zoom={12}>
        <TileLayer
          url="//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
      </Map>
    );
    ReactDOM.render(myMap, ReactDOM.findDOMNode(this.refs.mapVisuals));
  }
  
  render() {
    return (
      <div className="map">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
        <div ref="mapVisuals" className="map-visuals fix-map-height"></div>
        <Explanation />
      </div>
    );
  }
}

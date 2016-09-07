import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>A Simple Leaflet+React Map (Alternate)</h1>
        <p>Accurate as of 2016.09.07.</p>
      </div>
    );
  }
}

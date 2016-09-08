import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>A Simple Leaflet+React Map</h1>
        <p>Let's make a map. I assume you're already familiar with setting up up a React project (such as <a href="https://github.com/zooniverse/zoo-react-starterify">zooniverse/zoo-react-starterify</a>), so we'll jump straight in.</p>
        <h2>Setup</h2>
        <p>First, you'll need to import <a href="https://www.npmjs.com/package/leaflet">Leaflet</a>.</p>
        <code>
          package.json:<br/>
          &nbsp;&nbsp;"dependencies": {'{'}<br/>
          &nbsp;&nbsp;&nbsp;"leaflet": "0.7.7"<br/>
          &nbsp;&nbsp;{'}'}
        </code>
        <p>Then, in your React component, prepare a 'container' for the Leaflet Map.</p>
        <p>Also, be sure to import the Leaflet CSS.</p>
        <p>I've decided to do both steps simultaneously in my React component:</p>
        <code>
          Map1 React.Component: <br/>
          &nbsp;{'render() {'} <br/>
          &nbsp;&nbsp;{'return ('} <br/>
          &nbsp;&nbsp;&nbsp;{'<div className="map">'} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css" />'} <span className="comments">{'//Be sure to check what\'s the latest CSS.'}</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'<div ref="mapVisuals" className="map-visuals"></div>'} <span className="comments">{'//I\'ll use "mapVisuals" as the Leaflet container.'}</span><br/>
          &nbsp;&nbsp;&nbsp;{'</div>'} <br/>
          &nbsp;&nbsp;{');'} <br/>
          &nbsp;{'}'}
        </code>
        <h2>Initialise Leaflet Map</h2>
        <p>A new Leaflet Map can be created by calling <b>L.map()</b> and specifying the 'container' to put it in, and the map's starting properties.</p>
        <code>
          Map1 React.Component: <br/>
          &nbsp;componentDidMount() {'{'} <br/>
          &nbsp;&nbsp;const map = L.map(ReactDOM.findDOMNode(this.refs.mapVisuals), {'{'} <br/>
          &nbsp;&nbsp;&nbsp;center: [51.7520, -1.2577], <br/>
          &nbsp;&nbsp;&nbsp;zoom: 12, <br/>
          &nbsp;&nbsp;&nbsp;layers: [ <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;L.tileLayer( <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'\'//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png\''}, <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{ attribution: \'&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>\' }'} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;) <br/>
          &nbsp;&nbsp;&nbsp;], <br/>
          &nbsp;&nbsp;&nbsp;attributionControl: true,  <span className="comments">{'//Adds the attribution credits to the lower-right of the map.'}</span><br/>
          &nbsp;&nbsp;{'}'}); <br/>
          &nbsp;{'}'}
        </code>
        <p>You'll want to add the Leaflet Map on <b>componentDidMount()</b>, as the L.Map() function needs to wait until the container is rendered first.</p>
        <p>The "center" and "zoom" properties are self explanatory. 51.7520&deg; N, 1.2577&deg; W are the coordinates for Oxford, UK - hello there, old chap!</p>
        <p>The "layers" (or more accurately, the "tile layers") may require some explanation: this is the "base map" that visualises the geography that we're interested at. In this instance, we are using a free base map from OpenStreetMaps.</p>
        <p>You can actually stack multiple tile layers on top of each other, and even use custom tile layers, but let's not get ahead of ourselves.</p>
        <p>And that's it for a simple map!</p>
        <h2>Further Resources</h2>
        <ul>
          <li><a href="http://leafletjs.com/reference.html">Leaflet reference</a></li>
          <li><a href="https://leaflet-extras.github.io/leaflet-providers/preview/">Sources for free base maps (the tile layer)</a></li>
        </ul>
        <p>Accurate as of 2016.09.07.</p>
      </div>
    );
  }
}

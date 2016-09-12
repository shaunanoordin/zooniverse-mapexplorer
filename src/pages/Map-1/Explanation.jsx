import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>A Simple Leaflet+React Map</h1>
        <p>Let's make a map. I assume you're already familiar with setting up up a React project (such as <a href="https://github.com/zooniverse/zoo-react-starterify">zooniverse/zoo-react-starterify</a>), so we'll jump straight in.</p>
        <h2>Setup</h2>
        <p>First, you'll need to import <a href="https://www.npmjs.com/package/leaflet">Leaflet</a>.</p>
        <code dangerouslySetInnerHTML={{__html:
          'package.json: \n' +
          '  "dependencies": { \n' +
          '    "leaflet": "0.7.7" \n' +
          '  }'
        }}/>
        <p>Then, in your React component, prepare a 'container' for the Leaflet Map.</p>
        <p>Also, be sure to import the Leaflet CSS.</p>
        <p>I've decided to do both steps simultaneously in my React component:</p>
        <code dangerouslySetInnerHTML={{__html:
          'Map1 React.Component: \n' +
          '  render() { \n' +
          '    return ( \n' +
          '      &lt;div className="map"&gt; \n' +
          '        &lt;link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css" /&gt; <span class="comments">//Be sure to check the Leaflet website for the latest CSS file.</span> \n' +
          '        &lt;div ref="mapVisuals" className="map-visuals"&gt;&lt;/div&gt; <span class="comments">//I\'ll use "mapVisuals" as the Leaflet container.</span> \n' +
          '      &lt;/div&gt; \n' +
          '    ); \n' +
          '  }'
        }}/>
        <h2>Initialise Leaflet Map</h2>
        <p>A new Leaflet Map can be created by calling <b>L.map()</b> and specifying the 'container' to put it in, and the map's starting properties.</p>
        <code dangerouslySetInnerHTML={{__html:
          'Map1 React.Component: \n' +
          '  componentDidMount() { \n' +
          '    const myMap = L.map(ReactDOM.findDOMNode(this.refs.mapVisuals), { \n' +
          '    center: [51.7520, -1.2577], \n' +
          '    zoom: 12, \n' +
          '    layers: [ \n' +
          '      L.tileLayer( \n' +
          '        \'//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png\', \n' +
          '        { attribution: \'&amp;copy; &lt;a href="http://www.opencyclemap.org"&gt;OpenCycleMap&lt;/a&gt;, &amp;copy; &lt;a href="http://www.openstreetmap.org/copyright"&gt;OpenStreetMap&lt;/a&gt;\' } \n' +
          '      ) \n' +
          '    ], \n' +
          '    attributionControl: true,  <span class="comments">//Adds the attribution credits to the lower-right of the map.</span> \n' +
          '  }); \n' +
          '}'
        }}/>
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

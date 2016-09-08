import React from 'react';
import { Link } from 'react-router';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>A Simple Leaflet+React Map (Alternate ver)</h1>
        <p>If you don't like how the&nbsp;<Link to="/map-1" className="link">Simple Leaflet+React Map</Link>&nbsp;was built because it wasn't, uh, React-ish enough, there's an alternative way: use <b>react-leaflet</b>.</p>
        <h2>Setup</h2>
        <p>Import <a href="https://www.npmjs.com/package/react-leaflet">React-Leaflet</a>.</p>
        <code>
          package.json:<br/>
          &nbsp;&nbsp;"dependencies": {'{'}<br/>
          &nbsp;&nbsp;&nbsp;"react-leaflet": "0.12.1"<br/>
          &nbsp;&nbsp;{'}'}
        </code>
        <h2>Initialise Leaflet Map</h2>
        <p>React-Leaflet wraps the Leaflet functionality inside React components, so all you need to do is create the Map...</p>
        <code>
          Map1A React.Component <br/>
          &nbsp;const map = ( <br/>
          &nbsp;&nbsp;{'<Map center={[51.7520, -1.2577]} zoom={12}>'} <br/>
          &nbsp;&nbsp;&nbsp;{'<TileLayer'} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;url="{'//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png'}" <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;attribution='{'&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}' <br/>
          &nbsp;&nbsp;&nbsp;{'/>'} <br/>
          &nbsp;&nbsp;{'</Map>'} <br/>
          &nbsp;);
        </code>
        <p>...then <b>render</b> it, preferably in <b>componentDidMount()</b> (because you need to wait for the container to be rendered first).</p>
        <code>
          Map1A React.Component <br/>
          &nbsp;ReactDOM.render(map, ReactDOM.findDOMNode(this.refs.mapVisuals));
        </code>
        <p>One weird thing with this method (at least as far as I've tested on OSX+Chrome53) is that you need to <b>fix the height</b> of the Leaflet map, otherwise the map will essentially be height: 0.</p>
        <code>
          {'<div ref="mapVisuals" className="map-visuals fix-map-height"></div>'} <br/>
          <br/>
          {'<style>'} <br/>
          &nbsp;.fix-map-height > div <br/>
          &nbsp;{'{ height: 100% }'} <br/>
          {'</style>'}
        </code>
        <p>And that's it for a simple map!</p>
        <p>Accurate as of 2016.09.07.</p>
      </div>
    );
  }
}

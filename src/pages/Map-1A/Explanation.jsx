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
        <code dangerouslySetInnerHTML={{__html:
          'package.json: \n' +
          '  "dependencies": { \n' +
          '    "react-leaflet": "0.12.1" \n' +
          '  } '
        }}/>                                
        <h2>Initialise Leaflet Map</h2>
        <p>React-Leaflet wraps the Leaflet functionality inside React components, so all you need to do is create the Map...</p>
        <code dangerouslySetInnerHTML={{__html:
          'Map1A React.Component \n' +
          '  const myMap = ( \n' +
          '    &lt;Map center={[51.7520, -1.2577]} zoom={12}&gt; \n' +
          '      &lt;TileLayer \n' +
          '        url="//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png" \n' +
          '        attribution=\'&amp;copy; &lt;a href="http://www.opencyclemap.org"&gt;OpenCycleMap&lt;/a&gt;, &amp;copy; &lt;a href="http://www.openstreetmap.org/copyright"&gt;OpenStreetMap&lt;/a&gt;\' \n' +
          '      /&gt; \n' +
          '    &lt;/Map&gt;  \n' +
          '  ); '
        }}/>
        <p>...then <b>render</b> it, preferably in <b>componentDidMount()</b> (because you need to wait for the container to be rendered first).</p>
        <code dangerouslySetInnerHTML={{__html:
          'Map1A React.Component \n'+
          '  ReactDOM.render(myMap, ReactDOM.findDOMNode(this.refs.mapVisuals));'
        }}/>
        <p>One weird thing with this method (at least as far as I've tested on OSX+Chrome53) is that you need to <b>fix the height</b> of the Leaflet map, otherwise the map will essentially be height: 0.</p>
        <code dangerouslySetInnerHTML={{__html:
          '&lt;div ref="mapVisuals" className="map-visuals fix-map-height"&gt;&lt;/div&gt; \n\n' +
          '&lt;style&gt; \n' +
          '  .fix-map-height &gt; div \n' +
          '  { height: 100% } \n' +
          '&lt;/style&gt;'
        }}/>
        <p>And that's it for a simple map!</p>
        <h2>Further Resources</h2>
        <ul>
          <li><a href="https://github.com/PaulLeCam/react-leaflet/blob/master/docs/README.md">React-Leaflet documentation</a></li>
        </ul>
        <p>Accurate as of 2016.09.07.</p>
      </div>
    );
  }
}

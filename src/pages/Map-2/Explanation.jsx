import React from 'react';
import { Link } from 'react-router';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>Adding Data Layers</h1>
        <p>Let's make the map more interesting by adding some extra information on top of it.</p>
        <p>We'll move to Gorongosa in Mozambique (coordinates 18.8&deg; S, 34.4&deg; E) and show the borders of the Gorongosa National Park.</p>
        <h2>Preparing the Geo Data</h2>
        <p>If you take a look at the source files for this page, you'll see <b>gorongosa.json</b>, which contains the coordinates othe park's boundaries.</p>
        <p>This is a <b>GeoJSON</b> file that has its coordinates set to the <b>WGS84</b> coordinate reference system (CRS).</p>
        <p>Import it into your React component.</p>
        <code>
          const gorongosaGeoJSON = require('./gorongosa.json');
        </code>
        <h2>Adding the Geo Data Layer</h2>
        <p>To create a geo data layer, or more accurately, a <b>GeoJSON overlay layer</b>, you need two things: the GeoJSON data itself, and some visual styling.</p>
        <code dangerouslySetInnerHTML={{__html:
          'const gorongosaOptions = { \n' +
          '  style: { \n' +
          '    color: \'#fc3\', \n' +
          '    opacity: 1, \n' +
          '    fillOpacity: 0, \n' +
          '    clickable: false, \n' +
          '    weight: 5 \n' +
          '  } \n' +
          '}; \n' +
          '\n' +
          'const gorongosaLayer = L.geoJson(gorongosaGeoJSON, gorongosaOptions);'
        }}/>
        <p>Once you've created your data layer, simply add it to your map!</p>
        <code>
          gorongosaLayer.addTo(myMap);
        </code>
        <p>You're done!</p>
        <h2>FAQ</h2>
        <p><b>Q:</b> Where do you get GeoJSON data?</p>
        <p><b>A:</b> This kind of geographical data is usually specific to your project, so ask your partners/clients/government agencies.</p>
        <p><b>Q:</b> What if the partners/clients/government agencies have geographical data, but not in GeoJSON format?</p>
        <p><b>A:</b> See "Further Information, below.</p>
        <p><b>Q:</b> What if I plugged in some GeoJSON data but don't see it appear anywhere on the Leaflet map?</p>
        <p><b>A:</b> Did you check that it's using the correct CRS for your map? Here's a tip: Try opening your geo data file(s) in a dedicated mapping app, e.g. QGIS, to see that it's valid.</p>
        <h2>Further Information</h2>
        <p>One of the problems I encountered was when I was given geographical data in a completely different format and had to convert it into GeoJSON.</p>
        <p>In my case, I received ESRI Shapefiles (a collection of .shp + .dbf + .shx files) and had to do the following to get a web-friendly GeoJSON file:</p>
        <ol>
          <li>Install QGIS and run it.</li>
          <li>Drag the .shp file into QGIS to open it.</li>
          <li>The geomap should appear under the list of Layers.</li>
          <li>Right-click the appropriate Layer and click Save As</li>
          <li>In the Export settings, set the CRS (Coordinate Reference System) to WGS84 because that's what GeoJSON wants</li>
          <li>In the Export settings, set the Geometry type to Automatic.</li>
          <li>OK, save/export the file. You're done.</li>
        </ol>
        <p>Accurate as of 2016.09.12.</p>
      </div>
    );
  }
}

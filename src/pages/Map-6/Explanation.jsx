import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>Adding Interactive, Dynamic Data Markers</h1>
        <p>So far we've created a map that relies on static data; we know beforehand what the Vegetation and Gorongosa Park GeoJSON data will be. But what happens when we want to populate the map with information from a <b>dynamic or external data source</b>?</p>
        <p>In this example, we'll add <b>camera markers</b> pulled from a "database".</p>
        <h2>Faking a GeoJSON Database Source</h2>
        <p>We've set up a fake Camera Database in <b>camera-database.js</b>. It mimics the function of an external map database/GeoJSON provider like <a href="https://carto.com">Carto</a>.</p>
        <p>Given an input/query (in this case, a selection of vegetation/biome types), the fake database returns a list of cameras as a GeoJSON object.</p>
        <code dangerouslySetInnerHTML={{__html:
          'import CameraDatabase from \'./camera-database.js\'; \n' +
          '\n' +
          'CameraDatabase.getGeoJSON(camera_limestone, camera_floodplain, camera_miombo, camera_savanna)'
        }}/>
        <p>The mechanics of this fake database isn't important, only that you're getting GeoJSON data to feed into your Leaflet map.</p>
        <h2>Creating the Camera Layer</h2>
        <p>Creating the Camera Layer is mostly similar to creating any of the previous GeoJSON data layers: call <b>L.geoJson()</b> and pass in some data and options.</p>
        <p>However, whereas the previous GeoJSONs we've worked with consist of collections of <b>polygons</b> (indicating area), the list of Cameras will instead be a collection of <b>points</b>.</p>
        <p>We need a way to translate those points into <b>map markers</b>, and this is the <b>pointToLayer</b> property of the Camera Options.</p>
        <code dangerouslySetInnerHTML={{__html:
          'const cameraOptions = { \n' +
          '  pointToLayer: (feature, latlng) => { \n' +
          '    const vegetationColours = { \n' +
          '      \'Limestone Gorge\': \'#903\', \n' +
          '      \'Floodplain Grassland\': \'#06c\', \n' +
          '      \'Miombo Woodland\': \'#f66\', \n' +
          '      \'Mixed Savanna and Woodland\': \'#c93\', \n' +
          '    }; \n' +
          '    const marker = L.circleMarker(latlng, { <span class="comments">//Let\'s use a simple Circle Marker as our map marker.</span> \n' +
          '      color: \'#fff\', \n' +
          '      weight: 2, \n' +
          '      fillColor: vegetationColours[feature.properties.veg_type], \n' +
          '      fillOpacity: 0.8, \n' +
          '      radius: 6, \n' +
          '    }); \n' +
          '    marker.on(\'click\', (e) => { <span class="comments">//Let\'s attach an event handler.</span>\n' +
          '      alert( \n' +
          '        \'Marker: \' + marker.feature.properties.id + \'\\n\' + \n' +
          '        \'Biome: \' + marker.feature.properties.veg_type + \'\\n\' + \n' +
          '        \'Humans: \' + marker.feature.properties.human_type + \' (\' + marker.feature.properties.dist_humans_m + \'m away) \\n\' + \n' +
          '        \'Water: \' + marker.feature.properties.water_type + \' (\' + marker.feature.properties.dist_water_m + \'m away)\' \n' +
          '      ); \n' +
          '    }); \n' +
          '    return marker; \n' +
          '  } \n' +
          '};'
        }}/>
        <p>The <b>pointToLayer</b> property requires a function, which takes the a geographic point (or 'feature') and returns a map marker to be painted on the layer.</p>
        <p>Here's what you need to be aware of:</p>
        <p><b>1.</b> The marker we're creating is an <b>L.circleMarker()</b>. A simple circle, although if you want something fancy like an icon marker, there's an option for that.</p>
        <p><b>2.</b> <b>L.circleMarker()</b> requires only two arguments: the coordinates of the point, and the style of marker.</p>
        <p><b>3.</b> I've added dynamic styles to the marker, just to show that it can be done.</p>
        <p><b>4.</b> I've also added an event handler to the marker, so it pops an alert when you click on it. This is done, again, by using the <b>.on()</b> method.</p>
        <h2>Adding the Camera Layer</h2>
        <p>Now add the Camera Layer to the map:</p>
        <code dangerouslySetInnerHTML={{__html:
          'const cameraLayer = L.geoJson(null, cameraOptions); \n' +
          'cameraLayer.addTo(myMap); \n' +
          'this.cameraLayer = cameraLayer; \n' +
          'this.updateCameraLayer();'
        }}/>
        <p>You'll notice two things. First, I used 'null' as the initial value for the GeoJSON data. This just means you can initialise a GeoJSON layer with no data points if you want, which is handy if, say, you're "waiting for a response" from your external database.</p>
        <p>Second, you'll notice <b>this.cameraLayer = cameraLayer;</b> and <b>this.updateCameraLayer();</b>, both which are used to get the initial data from the "external database". This leads us to our next part</p>
        <h2>Adding Simple Input Controls</h2>
        <p>We've added some simple React input controls to demonstrate how a dynamic data layer can be handy for user input.</p>
        <p>In this case, we've added checkboxes that allow users to toggle which kinds of cameras should be shown on the map - the cameras in Limestone gorges, the cameras in Flood Plains, etc</p>
        <code dangerouslySetInnerHTML={{__html:
          '&lt;label&gt; \n' +
          '  &lt;input \n' +
          '    type="checkbox" onChange={this.updateCameraLayer.bind(this)} \n' +
          '    ref="camera_limestone" \n' +
          '    checked={this.state.camera_limestone} /&gt; \n' +
          '  &lt;span&gt;Limestone Gorge&lt;/span&gt; \n' +
          '&lt;/label&gt;'
        }}/>
        <p>These input elements all listen for the 'change' event and trigger <b>updateCameraLayer()</b>.</p>
        <h2>Updating the Camera Layer</h2>
        <p>Whenever we want to 'refresh' the Camera Layer, there are only two lines of code that are important:</p>
        <code dangerouslySetInnerHTML={{__html:
          'this.cameraLayer.clearLayers(); \n' +
          'this.cameraLayer.addData(CameraDatabase.getGeoJSON(...));'
        }}/>
        <p><b>clearLayers()</b> resets the content of the Camera Layer, while <b>addData()</b> populates the layer with new GeoJSON data.</p>
        <p>The rest of the code in <b>updateCameraLayer()</b> only exists to read/write to the React input components, and is only tangentially related to our map code.</p>
        <code dangerouslySetInnerHTML={{__html:
          'updateCameraLayer() { \n' +
          '  const camera_limestone = this.refs.camera_limestone.checked; \n' +
          '  const camera_floodplain = this.refs.camera_floodplain.checked; \n' +
          '  const camera_miombo = this.refs.camera_miombo.checked; \n' +
          '  const camera_savanna = this.refs.camera_savanna.checked; \n' +
          '\n' +
          '  this.cameraLayer.clearLayers(); \n' +
          '  this.cameraLayer.addData(CameraDatabase.getGeoJSON(camera_limestone, camera_floodplain, camera_miombo, camera_savanna)); \n' +
          '\n' +
          '  this.setState({ \n' +
          '    camera_limestone, \n' +
          '    camera_floodplain, \n' +
          '    camera_miombo, \n' +
          '    camera_savanna, \n' +
          '  }); \n' +
          '}'
        }}/>
        <p>And we're done here!</p>
        <p>Accurate as of 2016.09.14.</p>
      </div>
    );
  }
}

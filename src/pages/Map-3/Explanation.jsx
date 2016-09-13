import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>Adding Multiple Layers</h1>
        <p>You know what's better than having one Base Layer and one Data Layer? Having more of them.</p>
        <p>Let's pile on more layers to the map, and add a control that allows us to toggle between them.</p>
        <h2>Adding Multiple Base Layers</h2>
        <p>First, we'll add another Base Layer to accompany the one we already have.</p>
        <p>Instead of specifying our new Base Layers during the <b>L.map()</b> call, we'll initialise them separately.</p>
        <code dangerouslySetInnerHTML={{__html:
          'const topographyLayer = L.tileLayer( \n' +
          '  \'//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png\', \n' +
          '  { attribution: \'&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>\' } \n' +
          '); \n' +
          'const satelliteLayer = L.tileLayer( \n' +
          '  \'//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}\', \n' +
          '  \'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community\' \n' +
          ');'
        }}/>
        <p>Now, let's get back to the <b>L.map()</b> call. You only need one Base Layer to kick things off.</p>
        <code dangerouslySetInnerHTML={{__html:
          'const myMap = L.map(ReactDOM.findDOMNode(this.refs.mapVisuals), { \n' +
          '  ... \n' +
          '  layers: [ \n' +
          '    satelliteLayer <span class="comments">//This time, we\'ll use Satellites as the base map.</span>\n' +
          '  ], \n' +
          '  ... \n' +
          '});'
        }}/>
        <h2>Adding Multiple Data Layers</h2>
        <p>Second, we'll add another Data Layer. This is easy! We're just copy-pasting what we did for the <b>gorongosaLayer</b>, with some modifications.</p>
        <code dangerouslySetInnerHTML={{__html:
          'const vegetationGeoJSON = require(\'./vegetation.json\'); \n' +
          '\n' +
          'const vegetationOptions = { \n' +
          '  style: { \n' +
          '    color: \'#9c3\', \n' +
          '    opacity: 1, \n' +
          '    fillOpacity: 0, \n' +
          '    clickable: false, \n' +
          '    weight: 1, \n' +
          '  } \n' +
          '} \n' +
          'const vegetationLayer = L.geoJson(vegetationGeoJSON, vegetationOptions); \n' +
          'vegetationLayer.addTo(myMap);'
        }}/>
        <h2>Adding Layer Controls</h2>
        <p>If you look at the upper-right corner of the map above, you'll note that you're now able to select which Base Layer and which Data Layers are showing.</p>
        <p>That's the Layer Controls, and this is how you add it:</p>
        <code dangerouslySetInnerHTML={{__html:
          'const baseLayers = { \n' +
          '  \'Satellite\': satelliteLayer, \n' +
          '  \'Topography\': topographyLayer, \n' +
          '} \n' +
          'const dataLayers = { \n' +
          '  \'Gorongosa National Park\': gorongosaLayer, \n' +
          '  \'Vegetation/Biomes\': vegetationLayer, \n' +
          '} \n' +
          'const layerControlsOptions = { \n' +
          '  position: \'topright\', \n' +
          '  collapsed: false, <span class="comments">//For this example, we\'ll make the controls fully expanded, all the time.</span>\n' +
          '} \n' +
          'const layerControls = L.control.layers(baseLayers, dataLayers, layerControlsOptions); \n' +
          'layerControls.addTo(myMap);'
        }}/>
        <p>Again, it's quite straightforward: just create the object and <b>.addTo()</b> the map.</p>
        <p>The Layer Controls requires three things: the Base Layers, the Data Layers and the control options.</p>
        <p>Note that you can have multiple Data Layers active at a time, but only one active Base Layer. Which is the "default" active Base Layer? Take a look at our <b>L.map()</b> call above.</p>
        <p>Also, for both the Data Layers and the Base Layers, note how they're packed into <b>{'{}'} Objects</b> and how their labels ('Topography', 'Satellite', etc) are defined.</p>
        <p>And that's it for this section!</p>
        <p>Accurate as of 2016.09.13.</p>
      </div>
    );
  }
}

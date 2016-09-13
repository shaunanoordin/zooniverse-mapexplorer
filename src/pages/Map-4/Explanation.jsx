import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>Creating Dynamic Layer Styles</h1>
        <p>What do you do when a single GeoJSON file has multiple items in it which need to be styled differently?</p>
        <p>Take a look at the <b>vegetation.json</b> file in the source code. It has multiple <b>features</b> with different properties.</p>
        <code dangerouslySetInnerHTML={{__html:
          '"features": [ \n' +
          '  { "type": "Feature", "properties": { "NAME": "Montane Woodland", ... }, "geometry": ... }, \n' +
          '  { "type": "Feature", "properties": { "NAME": "Montane Forest", ... }, "geometry": ... }, \n' +
          '  { "type": "Feature", "properties": { "NAME": "Montane Grassland", ... }, "geometry": ... }, \n' +
          '  ... \n' +
          ']'
        }}/>
        <p>In this example, we'll try to make sure that each type of vegetation/biome has its own distinct colour.</p>
        <h2>Set Dynamic Style</h2>
        <p>Previously, we set the <b>vegetationOptions.style</b> to be a static object, like this:</p>
        <code dangerouslySetInnerHTML={{__html:
          'const vegetationOptions = { \n' +
          '  style: { \n' +
          '    color: \'#9c3\', \n' +
          '    opacity: 1, \n' +
          '    fillOpacity: 0, \n' +
          '    clickable: false, \n' +
          '    weight: 1, \n' +
          '  } \n' +
          '}'
        }}/>
        <p>Guess what? We can set <b>vegetationOptions.style</b> to be a <b>function</b>!</p>
        <code dangerouslySetInnerHTML={{__html:
          'const vegetationOptions = { \n' +
          '  style: function (feature) { \n' +
          '    const baseStyle = { \n' +
          '      color: \'#000\', \n' +
          '      opacity: 0, \n' +
          '      fillOpacity: 0.5, \n' +
          '      clickable: false, \n' +
          '      weight: 0, \n' +
          '    }; \n' +
          '\n' +
          '    const featureName = feature.properties.NAME; \n' +
          '    const specificStyles = { \n' +
          '      \'Miombo Woodland\': { color: \'#063\' }, \n' +
          '      \'Mixed Savanna and Woodland\': { color: \'#693\' }, \n' +
          '      \'Floodplain Grassland\': { color: \'#3c9\' }, \n' +
          '      \'Limestone Gorges\': { color: \'#cc0\' }, \n' +
          '      \'Montane Woodland\': { color: \'#c3c\' }, \n' +
          '      \'Montane Forest\': { color: \'#606\' }, \n' +
          '      \'Montane Grassland\': { color: \'#30c\' }, \n' +
          '      \'Lake Urema\': { color: \'#0ff\' }, \n' +
          '      \'Inselberg\': { color: \'#f30\' }, \n' +
          '    }; \n' +
          '\n' +
          '    return (specificStyles[featureName]) \n' +
          '      ? Object.assign(baseStyle, specificStyles[featureName]) \n' +
          '      : baseStyle; \n' +
          '  } \n' +
          '}'
        }}/>
        <p>The style function returns a <b>style {'{}'} object</b> and provides a reference to the <b>GeoJSON feature</b> that's being processed.</p>
        <p>There's obviously a better way to organise the dynamic style function, but that's an exercise for another time.</p>
        <h2>Protips!</h2>
        <ul>
          <li>Don't like the order order of your Data Layers? Switch them around! In this example I moved the code so <b>gorongosaLayer.addTo(myMap);</b> takes place AFTER <b>vegetationLayer.addTo(myMap);</b>. This will paint the boundaries of the park above the vegetation map.</li>
          <li>Are your Data Layers not looking visually distinct enough? Try changing your base layers. In this example, I switched back from the Satellite Base Layer to the simpler Topography Base Layer so I could see the coloured biomes more clearly. (Or, you know, ask a Designer for help. They're good with these sorta visual things.)</li>
        </ul>
        <p>Accurate as of 2016.09.13.</p>
      </div>
    );
  }
}

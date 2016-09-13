import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>Creating Interactive Layers</h1>
        <p>Now that we have our map set up, let's add some interactivity.</p>
        <p>As a simple example, we'll make an informative <b>alert()</b> pop up every time a feature in the Vegetation layer is clicked.</p>
        <h2>Setting Up The Style</h2>
        <p>First, we need to make sure the clickable bits of the map will <i>look</i> clickable.</p>
        <p>In the code, modify the <b>clickable property</b> of the Vegetation Layer Options:</p>
        <code dangerouslySetInnerHTML={{__html:
          'const vegetationOptions = { \n' +
          '  style: (feature) => { \n' +
          '    const baseStyle = { \n' +
          '      ... \n' +
          '      clickable: true, <span class="comments">//Of course.</span>\n' +
          '      ...'
        }}/>
        <p>In the CSS, add:</p>
        <code dangerouslySetInnerHTML={{__html:
          '.leaflet-clickable { cursor: pointer }'
        }}/>
        <p>Now when the mouse hovers over features in the vegetation layer, the cursor will indicate that the feature can be clicked.</p>
        <h2>Adding The Alert</h2>
        <p>To make the features of a layer react to events, we need to use the <b>onEachFeature</b> property. This is set in the layer options, alongside the layer style.</p>
        <code dangerouslySetInnerHTML={{__html:
          'const vegetationOptions = { \n' +
          '  style: ..., \n' +
          '\n' +
          '  onEachFeature: (feature, layer) => { \n' +
          '    layer.on(\'click\', (e) => { \n' +
          '      alert(\'Vegetation/Biome: \' + feature.properties.NAME); \n' +
          '    }); \n' +
          '  } \n' +
          '};'
        }}/>
        <p>Note that the <b>.on()</b> is just Leaflet's alias to "addEventListener", and the listener is added to the <b>layer</b>, not the feature.</p>
        <p><b>Protip:</b> Be sure to keep an eye out for JavaScript closure rules when setting this up.</p>
        <p>Accurate as of 2016.09.13.</p>
      </div>
    );
  }
}

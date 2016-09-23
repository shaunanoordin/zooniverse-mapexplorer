import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>Adding a "Recentre Map" Button</h1>
        <p>Let's add a simple button that recentres the map view. Partly to make navigating the map convenient for users, but mostly to show off custom controls and programmatic actions within the Leaflet Map.</p>
        <h2>Adding the 'Control'</h2>
        <p>What we're doing is adding a generic control, so we use <b>L.control()</b></p>
        <code dangerouslySetInnerHTML={{__html:
          'const recentreButton = L.control({position: \'topleft\'});'
        }}/>
        <p>The trick is how we define the button; this is done in the the control's <b>.onAdd()</b> function.</p>
        <code dangerouslySetInnerHTML={{__html:
          'recentreButton.onAdd = (map) => { \n' +
          '  const button = L.DomUtil.create(\'button\', \'btn fa fa-crosshairs\'); \n' +
          '  button.onclick = () => { \n' +
          '    myMap.setZoom(10); \n' +
          '    myMap.panTo([-18.8, 34.5]); \n' +
          '  }; \n' +
          '  return button; \n' +
          '};'
        }}/>
        <p>The most important thing to note here is that we're defining our "Recentre Map" button (i.e. the actual HTML DOM object) using <b>L.DomUtil</b> instead of using a React Component.</p>
        <p>This is a knowledge limitation since - although we know how to add Leaflet into React - adding React into Leaflet's a bit a mystery at the moment.</p>
        <p>On a minor note, we used <a href="http://fontawesome.io/">Font Awesome</a> to give the button a nice <span className="fa fa-crosshairs"></span> crosshairs icon.</p>
        <p>As usual, once we're done, we add it to the map and call it a day.</p>
        <code dangerouslySetInnerHTML={{__html:
          'recentreButton.addTo(myMap);'
        }}/>
        <p>Accurate as of 2016.09.22.</p>
      </div>
    );
  }
}

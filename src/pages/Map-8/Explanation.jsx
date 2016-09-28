import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return (
      <div className="map-explanation">
        <h1>Adding Geolocation</h1>
        <p>...</p>
        <h2>...</h2>
        <code dangerouslySetInnerHTML={{__html:
          '...'
        }}/>
        <p>Accurate as of 2016.09.28.</p>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router';
import packageJSON from '../../package.json';


export default class App extends React.Component {
  returnSomething(something) {
    // this is only for testing purposes. Check /test/components/App-test.js
    return something;
  }
  render() {
    const version = packageJSON.version;

    return (
      <div>
        <header className="site-header">
          <h1 className="title">Maps {version}</h1>
          <Link to="/" className="link">Index</Link>
        </header>
        <section className="content-section">
          {
            this.props.children ||
            <div className="index">
              <h1>Index</h1>
              <p>This is a guide for creating maps using Leaflet and Redux</p>
              <ul>
                <li><Link to="/map-1" className="link">Map 1:</Link> Create Simple Leaflet+React Map</li>
                <li><Link to="/map-1a" className="link">Map 1A:</Link> Create Simple Leaflet+React Map (alternate ver using <code>react-leaflet</code>)</li>
                <li><Link to="/map-2" className="link">Map 2:</Link> Add Data Layers</li>
                <li><Link to="/map-3" className="link">Map 3:</Link> Add Multiple Layers</li>
                <li><Link to="/map-4" className="link">Map 4:</Link> Create Dynamic Layer Styles</li>
                <li><Link to="/map-5" className="link">Map 5:</Link> Create Interactive Layers</li>
              </ul>
            </div>
          }
        </section>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.object,
};

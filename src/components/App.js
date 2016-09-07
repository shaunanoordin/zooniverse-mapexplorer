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
          <Link to="/map-1" className="link">Map-1</Link>
          <Link to="/map-1a" className="link">Map-1A</Link>
        </header>
        <section className="content-section">
          {this.props.children || 'Map map maps!'}
        </section>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.object,
};

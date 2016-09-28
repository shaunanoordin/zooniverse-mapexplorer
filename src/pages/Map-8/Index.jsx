import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import Explanation from './Explanation.jsx';

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      myLat: 51.7520,
      myLng: -1.2577,
      message: null,
    };
  }
  
  componentDidMount() {
    //Base Layers
    const topographyLayer = L.tileLayer(
      '//{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
      { attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }
    );
    const satelliteLayer = L.tileLayer(
      '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    );
    
    //Leaflet Map
    this.myMap = L.map(ReactDOM.findDOMNode(this.refs.mapVisuals), {
      center: [this.state.myLat, this.state.myLng],
      zoom: 15,
      layers: [
        topographyLayer
      ],
      attributionControl: true,
    });
    
    //Data Layer: Cameras
    const dataOptions = {
      pointToLayer: (feature, latlng) => {
        const marker = L.circleMarker(latlng, {
          color: '#fff',
          weight: 2,
          fillColor: '#c33',
          fillOpacity: 0.8,
          radius: 6,
        });
        return marker;
      }
    };
    const dataLayer = L.geoJson(null, dataOptions);
    dataLayer.addTo(this.myMap);
    this.dataLayer = dataLayer;
    this.updateDataLayer();
    
    //Layer Controls
    const baseLayers = {
      'Satellite': satelliteLayer,
      'Topography': topographyLayer,
    };
    const dataLayers = {
      'Data': dataLayer,
    };
    const layerControlsOptions = {
      position: 'topright',
      collapsed: false,
    };
    const layerControls = L.control.layers(baseLayers, dataLayers, layerControlsOptions);
    layerControls.addTo(this.myMap);
    
    //Update Cycle
    this.runCycle = setInterval(this.run.bind(this), 1000);
  }
  
  render() {
    return (
      <div className="map">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
        <div ref="mapVisuals" className="map-visuals"></div>
        {(this.state.message)
          ? <div className="map-controls">{this.state.message}</div>
          : null}
        <Explanation />
      </div>
    );
  }
  
  run() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          myLat: position.coords.latitude,
          myLng: position.coords.longitude,
          message: position.coords.latitude + ' / ' + position.coords.longitude + ' [' + position.coords.accuracy + ']',
        });
      });
    } else {
      this.setState({
        message: 'ERROR: Could not detect geolocation.',
      });
    }
    
    this.myMap.panTo([this.state.myLat, this.state.myLng]);
    this.updateDataLayer();
  }
  
  updateDataLayer() {
    //Update the camera layer.
    this.dataLayer.clearLayers();
    
    const circle = L.circle([this.state.myLat, this.state.myLng], 20, {
        color: '#fff',
        weight: 2,
        fillColor: '#c33',
        fillOpacity: 0.9,
        fillColor: '#c33',
        fillOpacity: 0.8,
    }).addTo(this.dataLayer);
  };
}

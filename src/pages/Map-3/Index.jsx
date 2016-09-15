import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import Explanation from './Explanation.jsx';
const gorongosaGeoJSON = require('./gorongosa.json');
const vegetationGeoJSON = require('./vegetation.json');

export default class Index extends React.Component {
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
    const myMap = L.map(ReactDOM.findDOMNode(this.refs.mapVisuals), {
      center: [-18.8, 34.4],
      zoom: 9,
      layers: [
        satelliteLayer
      ],
      attributionControl: true,
    });
    
    //Data Layer: Gorongosa National Park Borders
    const gorongosaOptions = {
      style: {
        color: '#fc3',
        opacity: 1,
        fillOpacity: 0,
        clickable: false,
        weight: 2
      }
    };
    const gorongosaLayer = L.geoJson(gorongosaGeoJSON, gorongosaOptions);
    gorongosaLayer.addTo(myMap);
    
    //Data Layer: Vegetation/Biomes
    const vegetationOptions = {
      style: {
        color: '#9c3',
        opacity: 1,
        fillOpacity: 0,
        clickable: false,
        weight: 1,
      }
    };
    const vegetationLayer = L.geoJson(vegetationGeoJSON, vegetationOptions);
    vegetationLayer.addTo(myMap);
    
    //Layer Controls
    const baseLayers = {
      'Satellite': satelliteLayer,
      'Topography': topographyLayer,
    };
    const dataLayers = {
      'Gorongosa National Park': gorongosaLayer,
      'Vegetation/Biomes': vegetationLayer,
    };
    const layerControlsOptions = {
      position: 'topright',
      collapsed: false,
    };
    const layerControls = L.control.layers(baseLayers, dataLayers, layerControlsOptions);
    layerControls.addTo(myMap);
  }
  
  render() {
    return (
      <div className="map">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
        <div ref="mapVisuals" className="map-visuals"></div>
        <Explanation />
      </div>
    );
  }
}

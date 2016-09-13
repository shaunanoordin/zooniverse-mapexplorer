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
        topographyLayer
      ],
      attributionControl: true,
    });
    
    //Data Layer: Vegetation/Biomes
    const vegetationOptions = {
      style: function (feature) {
        const baseStyle = {
          color: '#000',
          opacity: 0,
          fillOpacity: 0.5,
          clickable: false,
          weight: 0,
        };
        
        const featureName = feature.properties.NAME;
        const specificStyles = {
          'Miombo Woodland': { color: '#063' },
          'Mixed Savanna and Woodland': { color: '#693' },
          'Floodplain Grassland': { color: '#3c9' },
          'Limestone Gorges': { color: '#cc0' },
          'Montane Woodland': { color: '#c3c' },
          'Montane Forest': { color: '#606' },
          'Montane Grassland': { color: '#30c' },
          'Lake Urema': { color: '#0ff' },
          'Inselberg': { color: '#f30' },
        };
        
        return (specificStyles[featureName])
          ? Object.assign(baseStyle, specificStyles[featureName])
          : baseStyle;
      }
    };
    const vegetationLayer = L.geoJson(vegetationGeoJSON, vegetationOptions);
    vegetationLayer.addTo(myMap);
    
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
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css" />
        <div ref="mapVisuals" className="map-visuals"></div>
        <Explanation />
      </div>
    );
  }
}

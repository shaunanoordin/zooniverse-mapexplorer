import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import Explanation from './Explanation.jsx';
const gorongosaGeoJSON = require('./gorongosa.json');
const vegetationGeoJSON = require('./vegetation.json');

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      range: 10,
    };
  }
  
  componentDidMount() {
    if (this.myMap) {
      console.log('componentDidMount(): map already created.');
      return;
    } else {
      console.log('componentDidMount(): creating map.');
    }
    
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
      center: [-18.8, 34.4],
      zoom: 9,
      layers: [
        topographyLayer
      ],
      attributionControl: true,
    });
    
    //Data Layer: Vegetation/Biomes
    const vegetationOptions = {
      style: (feature) => {
        const baseStyle = {
          color: '#000',
          opacity: 0,
          fillOpacity: 0.5,
          clickable: true,
          pointer: 'cursor',
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
      },
      
      onEachFeature: (feature, layer) => {
        layer.on('click', (e) => {
          alert('Vegetation/Biome: ' + feature.properties.NAME);
        });     
      }
    };
    const vegetationLayer = L.geoJson(vegetationGeoJSON, vegetationOptions);
    vegetationLayer.addTo(this.myMap);
    
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
    gorongosaLayer.addTo(this.myMap);
    
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
    layerControls.addTo(this.myMap);
  }
  
  render() {
    console.log('render()');
    return (
      <div className="map">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
        <div ref="mapVisuals" className="map-visuals"></div>
        <div ref="mapControls" className="map-controls">
          <label>
            <span>Range</span>
            <input ref="range" type="range" onChange={this.updateRange.bind(this)} min={0} max={100} value={this.state.range} />
          </label>
        </div>
        <Explanation />
      </div>
    );
  }
  
  updateRange() {
    this.setState({
      range: this.refs.range.value
    });
  }
}

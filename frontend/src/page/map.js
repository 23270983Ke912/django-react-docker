
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoia2U5MTIiLCJhIjoiY2xrMjY2MXJ3MDAzZTNkb2ZiODFzczh2OSJ9.V4-_AIL7TrQolSiQYDZudw';

const Map = () => {
    const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(115.857048);
const [lat, setLat] = useState(-31.953512);
const [zoom, setZoom] = useState(12);
useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });
    map.current.on('style.load', () => {
      map.current.setFog({}); // Set the default atmosphere style
      });
       
      map.current.on('load', () => {
      map.current.addSource('subrubs', {
      type: 'geojson',
      // Use a URL for the value for the `data` property.
      data: '/data/map.geojson'
      });
       
      map.current.addLayer({
      'id': 'subrubs-layer',
      'type': 'line',
      'source': 'subrubs',
      "paint": {
        'line-color': '#355e92',
        'line-width': 3
        
      }
      });
    });


  });


    
useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        
        });
    
  return (
    
    <div className="mt-5 ml-10 mr-10 text-center">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        <div ref={mapContainer} className=" h-[80vh] mb-10 map-container "></div> 
    </div>
  )
}

export default Map
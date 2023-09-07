import React, { useRef, useEffect, useState } from 'react';
import axios from "axios"
import mapboxgl from 'mapbox-gl';
import jenks from 'turf-jenks'
mapboxgl.accessToken = 'pk.eyJ1Ijoia2U5MTIiLCJhIjoiY2xrMjY2MXJ3MDAzZTNkb2ZiODFzczh2OSJ9.V4-_AIL7TrQolSiQYDZudw';

const Map = () => {
  const [suburbsJSON, setsuburbsJSON] = useState()
  useEffect(() => {

  const access=sessionStorage.getItem("access");
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/map_gis/getgis/',
    headers: { 
      'Authorization': 'Bearer '+access
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    setsuburbsJSON(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

  },[]);


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
    const colors = ['#f7fcf5','#c9eac2','#7bc77c','#2a924b','#00441b']
    //const breaks = jenks(counties,'persons_per_point', colors.length)

    // let breaksInsert = []
    // for (let i = 1; i < colors.length; i++) {
    //   breaksInsert.push(`${breaks[i]},"${colors[i]}"`)
    // }
    map.current.on('load', () => {
      map.current.addSource('suburbs', {
        type: 'geojson',
        data: '/data/map.geojson' // Use a URL for the value for the `data` property.
      });

      map.current.addLayer({
        id: 'suburbs-border-layer',
        type: 'line',
        source: 'suburbs',
        paint: {
          'line-color': '#355e92',
          'line-width': 3
        }
      });

      map.current.addLayer({
        id: 'suburbs-layer',
        type: 'fill',
        source: 'suburbs',
        paint: {
          'fill-color': 'blue',
          'fill-opacity': 0.05
        }
      });
    });
  }, []);

  useEffect(() => {

   // const popup = new mapboxgl.Popup({});

    if (!map.current) return; // wait for the map to initialize

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on('mouseenter', 'suburbs-layer', (e) => {
      map.current.getCanvas().style.cursor = 'pointer';
      // let html = `<ul id='popup' className='popup'>`;
      console.log(e.lngLat);
      console.log(e.features[0].properties);
      // html += `<li><strong> ${e.features[0].properties.SAL_NAME21} </strong></li>`;
      // html += `</ul>`;
      // popup.setLngLat(e.lngLat).setHTML(html).addTo(map.current);
   
    });

    map.current.on('mouseleave', 'suburbs-layer', () => {
      map.current.getCanvas().style.cursor = '';
      console.log("mouseleave");
      // popup.remove();
    });
  }, []);

  return (
    <div className="mt-5 ml-10 mr-10 text-center">
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      <div ref={mapContainer} className="h-[80vh] mb-10 map-container"></div>
    </div>
  );
};

export default Map;

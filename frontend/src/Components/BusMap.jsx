

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

const MapPage = ({ from, to }) => {
  useEffect(() => {
    
    const initializeMap = () => {
      const map = L.map('map', {
        center: [12.9716, 77.5946], 
        zoom: 13 
      });

      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);

     
      const geocodeLocation = async (location) => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
          const data = await response.json();
          if (data.length > 0) {
            return [data[0].lat, data[0].lon];
          }
        } catch (error) {
          console.error('Geocoding error:', error);
        }
        return null;
      };

      
      const addRoute = async () => {
        const fromCoords = await geocodeLocation(from);
        const toCoords = await geocodeLocation(to);
        if (fromCoords && toCoords) {
          L.Routing.control({
            waypoints: [
              L.latLng(fromCoords[0], fromCoords[1]),
              L.latLng(toCoords[0], toCoords[1]),
            ],
            routeWhileDragging: true,
          }).addTo(map);
        } else {
          console.error('Failed to get coordinates for one or both locations.');
        }
      };

      addRoute();

      return map;
    };

    const map = initializeMap();

   
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [from, to]);

  return (
    <div id="map" style={{ height: '40vh', width: '100%' }}>
      
    </div>
  );
};

export default MapPage;





import React, { useState } from 'react';
import './Location.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from 'leaflet';
import CustomPopup from './CustomPopup';

export default function Location() {
  const [btnPopup, setBtnPopup] = useState(false);
  const [currentMarkerIndex, setCurrentMarkerIndex] = useState(-1);
  const [ElementPopup , setElementPopup ] = useState(null)
  
  const markers = [
    {
      id: 0,
      geocode: [36.576571257123284, 10.851420783214218],
      popUp: "Hello, I am pop up 1"
    },
    {
      id: 1,
      geocode: [36.720699605438654, 10.255683639754116],
      popUp: "Hello, I am pop up 2"
    },
    {
      id: 2,
      geocode: [37.15407255778306, 10.123400320885676],
      popUp: "Hello, I am pop up 3"
    },
    {
      id: 3,
      geocode: [37.032182788790855, 9.682514746289103],
      popUp: "Hello, I am pop up 4"
    }
  ];

  const customIcon = new Icon({
    iconUrl: "https://img.icons8.com/?size=100&id=13800&format=png&color=000000",
    iconSize: [38, 38]
  });

  const handleCheckNext = () => {
    setCurrentMarkerIndex((prevIndex) => (prevIndex + 1) % markers.length);
    setElementPopup(markers[(currentMarkerIndex + 1) % markers.length]);
  };

  return (
    <div className="map-container" onClick={()=>{setBtnPopup(false)}}>
      <MapContainer
        className="map"
        center={[36.81437191945361, 10.180696767264044]}
        zoom={10}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            eventHandlers={{
              click: (event) => { 
                event.originalEvent.stopPropagation(); 
                setBtnPopup(true); 
                setCurrentMarkerIndex(index); 
              }
            }}
            className='marker'
            position={marker.geocode}
            icon={customIcon}
          />
        ))}
      </MapContainer>
      <CustomPopup onClick={(event)=>{event.stopPropagation();}}
        trigger={btnPopup} 
        tab={markers} 
        currentMarker={markers[currentMarkerIndex]} 
        ind={currentMarkerIndex}
        handleCheckNext={handleCheckNext}
      />
    </div>
  );
}

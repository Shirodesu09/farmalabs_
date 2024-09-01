import React, { useState,useEffect } from 'react';
import './Location.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon, marker } from 'leaflet';
import CustomPopup from './CustomPopup';

export default function Location() {
  const [btnPopup, setBtnPopup] = useState(false);
  const [currentMarkerIndex, setCurrentMarkerIndex] = useState(-1);
  const [ElementPopup , setElementPopup ] = useState(null)
  const [markers, setmarkers] = useState(null)

  useEffect(() => {
    const fetchLocation = async ()=> {
      try{
        const response = await fetch('http://127.0.0.1:8477/api/apiaries')
        const data = await response.json()
        console.log(data);
        
        setmarkers(data)

      }catch(error){
        console.error(error)
      }
    }
    fetchLocation();
  }, [])
  if (!markers){
    return <div className='loader'></div>;
  }
  
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

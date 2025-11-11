"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const position: [number, number] = [23.780887, 90.416846];

const redDotIcon = new L.Icon({
  iconUrl: "/images/pin-red.png",
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [0, -55],
});

const MapWithPin: React.FC = () => {
  return (
    <div className="relative w-full lg:max-w-[634px] h-[272px] sm:h-[350px] lg:h-[483px] overflow-hidden rounded-[16px] ">
      <MapContainer center={position} zoom={17} scrollWheelZoom={false} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={redDotIcon}>
          <Popup>
            <strong>RedDot Digital Limited</strong>
            <br />
            53 Gulshan Avenue, Dhaka 1212
            
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithPin;

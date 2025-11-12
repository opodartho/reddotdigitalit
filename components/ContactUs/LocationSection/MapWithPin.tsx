"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 📍 Custom RedDot pin icon
const redDotIcon = L.icon({
  iconUrl: "/images/pin-red.png",
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [0, -55],
});

// 📍 Accurate coordinates for both offices
const GULSHAN: [number, number] = [23.782992876384004, 90.4166415905529];
const GAZIPUR: [number, number] = [24.071567335781733, 90.2223785213643];

// 🧭 Component that adds a marker and keeps its popup open permanently
const AlwaysOpenPopup = ({
  position,
  label,
  icon,
}: {
  position: [number, number];
  label: string;
  icon: L.Icon;
}) => {
  const map = useMap();

  useEffect(() => {
    const marker = L.marker(position, { icon }).addTo(map);
    marker.bindPopup(label, { closeButton: false, autoClose: false }).openPopup();
  }, [map, position, label, icon]);

  return null;
};

const MapWithPin: React.FC = () => {
  return (
    <div className="relative w-full lg:max-w-[634px] h-[272px] sm:h-[350px] lg:h-[483px] overflow-hidden rounded-[16px]">
      <MapContainer
        center={[23.92, 90.32]} // Center between Gulshan & Gazipur
        zoom={9.5}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        {/* 🗺️ Map tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 🏢 Corporate Office (Gulshan) */}
        <AlwaysOpenPopup
          position={GULSHAN}
          icon={redDotIcon}
          label={`
            <div style="text-align:center">
              <strong style="font-size:15px;">Corporate Office</strong><br/>
              57 & 57/A, Uday Tower (15th Floor),<br/>
              Gulshan 1, Dhaka 1212
            </div>
          `}
        />

        {/* 🏭 Registered Office (Gazipur) */}
        <AlwaysOpenPopup
          position={GAZIPUR}
          icon={redDotIcon}
          label={`
            <div style="text-align:center">
              <strong style="font-size:15px;">Registered Office</strong><br/>
              Ward 03, Holding B-2, Bangabandhu Hi-Tech City,<br/>
              Kaliakair, Gazipur 1751
            </div>
          `}
        />
      </MapContainer>
    </div>
  );
};

export default MapWithPin;

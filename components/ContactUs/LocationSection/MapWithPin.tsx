"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { LocationData } from "@/lib/api/contact/getLocationData";

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

const MapWithPin = ({ data }: { data: LocationData }) => {
  const redDotIcon = L.icon({
    iconUrl: data.map.pinIcon,
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [0, -55],
  });

  return (
    <div className="relative w-full w-[357px] lg:container [634px] h-[272px] sm:h-[350px] lg:h-[483px] overflow-hidden rounded-[16px]">
      <MapContainer
        center={data.map.center}
        zoom={data.map.zoom}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <AlwaysOpenPopup
          position={data.offices.corporate.coordinates}
          icon={redDotIcon}
          label={`<strong>${data.offices.corporate.title}</strong><br/>${data.offices.corporate.address}`}
        />

        <AlwaysOpenPopup
          position={data.offices.registered.coordinates}
          icon={redDotIcon}
          label={`<strong>${data.offices.registered.title}</strong><br/>${data.offices.registered.address}`}
        />
      </MapContainer>
    </div>
  );
};

export default MapWithPin;

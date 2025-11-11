"use client";

import React, { useState } from "react";
import { GoogleMap as Map, MarkerF, InfoWindowF, useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from  "@/lib/api/googleConfigForMap"

export const GoogleMap: React.FC = () => {
 
  const center = { lat: 23.751115, lng: 90.412746 };
  const [isOpen, setIsOpen] = useState(false);



  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="w-full h-[272px] sm:h-[350px] lg:h-[483px] rounded-2xl overflow-hidden shadow-md border border-[#E5E5E5]/40">
      <Map
        center={center}
        zoom={16}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          streetViewControl: false,
          fullscreenControl: false,
        }}
      >
        <MarkerF position={center} onClick={() => setIsOpen(true)} />
        {isOpen && (
          <InfoWindowF position={center} onCloseClick={() => setIsOpen(false)}>
            <div className="text-sm font-medium text-black">
              <strong>RedDot Digital Limited</strong>
              <br />
              53 Gulshan Avenue, Dhaka 1212
            </div>
          </InfoWindowF>
        )}
      </Map>
    </div>
  );
};

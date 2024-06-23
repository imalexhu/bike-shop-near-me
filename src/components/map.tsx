"use client";

import { GoogleMap } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};

const MapComponent = () => {
  const defaultMapCenter = {
    lat: 35.8799866,
    lng: 76.5048004,
  };

  const defaultMapZoom = 18;

  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "satellite",
  };

  return (
    <div
      className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
      </GoogleMap>
    </div>
  );
};

export { MapComponent };

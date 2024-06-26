"use client";
import {
  APIProvider, Map, Marker
} from "@vis.gl/react-google-maps";

export default function GoogleMapView() {
  const position = {
    lat: 53.54992,
    lng: 10.00678,
  };

  return (
    <div
      className="h-full w-full">
      <APIProvider
        apiKey={"AIzaSyBCzLxm9s3zILCZKI3_dTzQJP0TaKouOWg"}>
        <Map
          defaultCenter={position}
          defaultZoom={10}>
          <Marker
            position={position} />
        </Map>
      </APIProvider>
    </div>

  );
}


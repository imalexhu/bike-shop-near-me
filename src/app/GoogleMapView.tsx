"use client";
import {
  APIProvider, Map, Marker
} from "@vis.gl/react-google-maps";

interface position {
  lat: number,
  lng : number,
}

export default function GoogleMapView({
  position,
} : {position : position}) {
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


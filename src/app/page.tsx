"use client";
import { useSearchParams } from "next/navigation";
import GoogleMapView from "./GoogleMapView";

export default function Home() {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat") as string;
  const lng = searchParams.get("lng") as string;

  const positions = {
    lat: Number(lat),
    lng: Number(lng),
  };

  return (
    <div
      className="flex flex-cols justify-center items-center h-screen w-full bg-gray-600">
      <div
        className="flex flex-cols justify-center items-start bg-white h-screen w-2/5 rounded-md p-4">
        <div
          className="text-balck h-1/2 w-full">
          Here
          <GoogleMapView
            position={positions}/>
        </div>
        <div
          className="
        ">
          {/* <LocationList /> */}
        </div>
      </div>
    </div>
  );
}

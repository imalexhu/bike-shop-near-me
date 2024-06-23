import { MapComponent } from "@/components/map";
import { MapProvider } from "./mapProvider";

export default function Home() {
  return <MapProvider>
    <MapComponent />
  </MapProvider>;
}

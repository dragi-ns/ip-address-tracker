import { Icon, LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import IconLocation from '../assets/icon-location.svg';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  position: LatLngExpression;
}

const markerIcon = new Icon({
  iconUrl: IconLocation,
  iconRetinaUrl: IconLocation,
});

export function Map({ position }: MapProps) {
  return (
    <MapContainer
      className="flex-1 min-h-[35rem] relative bottom-0"
      center={position}
      zoom={15}
      zoomControl={false}>
      <ChangableView position={position} />
      <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZHJhZ2ktbnMiLCJhIjoiY2xkZDlpbzNlMDFmdzNuczByaHdydDU1MyJ9.YLVby7LCFe5XvFw3xGKHuw"
      />
      <Marker position={position} icon={markerIcon} />
    </MapContainer>
  );
}

// https://stackoverflow.com/a/64667351
function ChangableView({ position }: MapProps) {
  const map = useMap();
  map.setView(position);
  return null;
}

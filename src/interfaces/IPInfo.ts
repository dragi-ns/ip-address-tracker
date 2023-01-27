import { LatLngExpression } from 'leaflet';

export interface IPInfo {
  ip: string;
  country: string;
  city: string;
  coords: LatLngExpression;
  postalCode: string;
  timezone: string;
  isp: string;
}

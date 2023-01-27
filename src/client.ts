import { IPInfo } from './interfaces/IPInfo';

// It's a free account...
const API_KEY = 'at_l0GmHKin9KGUfdSDD91DWEW8zzzLf';
const BASE_URL = `https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

export async function getIPInfo(value: string = ''): Promise<[any, any]> {
  try {
    const response = await fetch(`${BASE_URL}&domain=${value}`);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export function processResponseData(responseData: any): IPInfo {
  return {
    ip: responseData.ip,
    country: responseData.location.country,
    city: responseData.location.city,
    coords: [+responseData.location.lat, +responseData.location.lng],
    postalCode: responseData.location.postalCode,
    timezone: responseData.location.timezone,
    isp: responseData.isp,
  };
}

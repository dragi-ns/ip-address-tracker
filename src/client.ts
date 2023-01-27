import { IPInfo } from './interfaces/IPInfo';

export async function getIPInfo(value: string = ''): Promise<[any, any]> {
  try {
    const response = await fetch(`/.netlify/functions/ip-info?domain=${value}`);
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

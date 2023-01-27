import fetch, { Response } from 'node-fetch';
import { Handler, HandlerEvent } from '@netlify/functions';

const BASE_URL = `https://geo.ipify.org/api/v2/country,city`;

export const handler: Handler = async (event: HandlerEvent) => {
  const { API_KEY } = process.env;
  //@ts-ignore
  const { domain = '' } = event.queryStringParameters;

  let response: Response;
  let data: any;
  try {
    response = await fetch(`${BASE_URL}?apiKey=${API_KEY}&domain=${domain}`);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    data = await response.json();
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

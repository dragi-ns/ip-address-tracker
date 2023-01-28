import fetch, { Response } from 'node-fetch';
import { Handler, HandlerEvent } from '@netlify/functions';

const BASE_URL = `https://geo.ipify.org/api/v2/country,city`;

export const handler: Handler = async (event: HandlerEvent, context) => {
  const { API_KEY } = process.env;
  let domain = event.queryStringParameters?.domain;
  if (!domain || domain.length === 0) {
    domain =
      event.headers['x-nf-client-connection-ip'] ||
      event.headers['client-ip'] ||
      '';
  }

  let response: Response;
  let data: any;
  try {
    response = await fetch(`${BASE_URL}?apiKey=${API_KEY}&domain=${domain}`);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    data = await response.text();
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
    body: data,
  };
};

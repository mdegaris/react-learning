import axios from 'axios';
import urls from '../remoteUrls';

const server = axios.create({
  baseURL: urls.SERVER_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

const sleep = (ms : number) => new Promise(r => setTimeout(r, ms)); 

export const fetchJsonData = async <T>(url: string): Promise<T> => {
  
  await sleep(1000);

  const response = await server.get(url);

  if (response.status !== 200) {
    throw new Error(`SERVER ERROR: Could not fetch data from ${url}.`);
  }

  return response.data;
};

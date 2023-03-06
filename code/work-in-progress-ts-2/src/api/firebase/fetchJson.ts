import axios from "axios";
import { json } from "stream/consumers";
import { z, ZodType, ZodError } from "zod";
import urls from "../remoteUrls";

// Create http server connection.
const server = axios.create({
  baseURL: urls.SERVER_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// Debug testing delayed fetch
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Fetch JSON data from the a given URL.
// The expected JSON structure will have to match type T
// The fetched and returned data will be stored in an object of type T.
export const fetchJsonData = async <T>(url: string): Promise<T> => {
  // Debug testing delayed fetch
  await sleep(1000);

  // Get response data
  const response = await server.get(url);

  if (response.status !== 200) {
    throw new Error(`SERVER ERROR: Could not fetch data from ${url}.`);
  }

  try {
    type Q = z.infer<typeof response.data>;
    const jsonSchema: ZodType<T> = z.lazy(() => z.object(response.data));
    jsonSchema.parse(response.data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }

  // console.log(typeof response.data);
  // const data: T = response.data;
  // console.log(typeof data);

  // jsonSchema.parse(response.data);

  return response.data;
};

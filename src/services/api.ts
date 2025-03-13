import axios, { AxiosResponse } from 'axios';
import { GetImagesData } from './api.types';
const META_ENV = import.meta.env;

const ACCESS_KEY = META_ENV.VITE_ACCESS_KEY;
const BASE_URL = META_ENV.VITE_BASE_URL;

axios.defaults.baseURL = BASE_URL;

let perPage: number = 12;

export const getImages = async (
  page: number,
  query: string
): Promise<GetImagesData> => {
  const params = new URLSearchParams({
    client_id: ACCESS_KEY,
    per_page: perPage.toString(),
    page: page.toString(),
    query,
    orientation: 'landscape',
  });
  const response: AxiosResponse<GetImagesData> = await axios.get(
    '/search/photos',
    {
      params,
    }
  );
  return response.data;
};

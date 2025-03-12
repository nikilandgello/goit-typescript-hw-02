import axios from 'axios';
const META_ENV = import.meta.env;

const ACCESS_KEY = META_ENV.VITE_ACCESS_KEY;
const BASE_URL = META_ENV.VITE_BASE_URL;

axios.defaults.baseURL = BASE_URL;

let perPage = 12;

export const getImages = async (page, query) => {
  const params = new URLSearchParams({
    client_id: ACCESS_KEY,
    per_page: perPage,
    page,
    query,
    orientation: 'landscape',
  });
  const response = await axios.get('/search/photos', { params });
  return response.data;
};

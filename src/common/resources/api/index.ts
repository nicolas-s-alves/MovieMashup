import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function getApiClient() {
  const api = axios.create({
    baseURL: `https://api.themoviedb.org`,
  });

  api.interceptors.request.use(async config => {
    if (config.headers) {
      config.headers.authorization = `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`;
    }

    return config;
  });

  return api;
}

export const api = getApiClient();

export const queryClient = new QueryClient();

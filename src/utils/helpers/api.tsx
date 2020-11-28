import axios from 'axios';
import cookie from 'js-cookie';
import { sha256 } from 'js-sha256';
import {
  some,
  BASE_URL,
  ACCESS_TOKEN,
  APP_KEY,
  VERSION,
  APP_ID,
} from 'constants/constants';

const AppHash = Buffer.from(
  sha256(
    `${
      new Date().getTime() / 1000 - ((new Date().getTime() / 1000) % 300)
    }:${APP_KEY}`
  ),
  'hex'
).toString('base64');

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'user-agent': '',
    'login-token': `${cookie.get(ACCESS_TOKEN)}`,
    deviceInfo: 'HMS',
    version: VERSION,
    appHash: AppHash,
    appId: APP_ID,
  },
});

request.interceptors.request.use(
  (config: some) => {
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

const api = (options: some) => {
  return request({
    baseURL: BASE_URL,
    ...options,
    headers: { 'Accept-Language': 'vi', ...options.headers },
  });
};

export default api;

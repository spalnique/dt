import axios from 'axios';

import env from './utils/env';
import { ENV_VARS } from './constants';

const API_KEY = env(ENV_VARS.API_KEY);
const API_URL = env(ENV_VARS.API_URL);

const baseURL = `${API_URL}/${API_KEY}`;
const headers = {
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({ baseURL, headers });

export default axiosInstance;

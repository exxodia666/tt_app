import axios from 'axios';
import Config from 'react-native-config';

export const axiosService = axios.create({
  baseURL: Config.API_URL,
});

// /src/api/gateService.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api/gate',
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const logEntryExit = async (vehicleId, action) => {
  const response = await api.post('/', { vehicleId, action });
  return response.data;
};
// /src/api/parkingService.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api/parking',
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getSlotAvailability = async () => {
  const response = await api.get('/availability');
  return response.data;
};
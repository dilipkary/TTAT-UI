// /src/api/vehicleService.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api/vehicles',
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getVehicles = async () => {
  const response = await api.get('/');
  return response.data;
};

export const addVehicle = async (vehicle) => {
  const response = await api.post('/', vehicle);
  return response.data;
};

export const updateVehicle = async (id, vehicle) => {
  const response = await api.put(`/${id}`, vehicle);
  return response.data;
};

export const deleteVehicle = async (id) => {
  await api.delete(`/${id}`);
};
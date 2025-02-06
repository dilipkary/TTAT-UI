// /src/api/authService.js
import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    localStorage.setItem('token', response.data.token);
    return response.data.token;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.quicksell.co/v1/internal/frontend-assignment',
});

export const getTickets = () => api.get('/');

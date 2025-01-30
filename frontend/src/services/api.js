// src/services/api.js
import axios from 'axios';

export const API_BASE_URL = 'http://localhost:8080/api';

// Example: GET all tasks
export function getAllTasks() {
  return axios.get(`${API_BASE_URL}/tasks`);
}

// Example: POST a new task
export function createTask(taskData) {
  return axios.post(`${API_BASE_URL}/tasks`, taskData);
}
// etc...

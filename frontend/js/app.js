const API_URL = 'http://localhost:3000/api';

function setToken(token) {
  localStorage.setItem('token', token);
}

function getToken() {
  return localStorage.getItem('token');
}


async function apiFetch(path, method = 'GET', body = null) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = token;

  const res = await fetch(API_URL + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });
  return res.json();
}

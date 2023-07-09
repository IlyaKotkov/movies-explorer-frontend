export const BASE_URL = 'api.kotkovdiplom.nomoredomains.rocks';

function getResponseData(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`)
}

export const register = async ( name, email, password) => {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password }),
    });
    return getResponseData(response); 
}


export const authorize = async (email, password) => {
  const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });
    const data = getResponseData(response);
    if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
    }
};

export const getContent = async (token) => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    }
  });
  const data = getResponseData(response);
  return data;
} 
export const BASE_URL = 'https://api.kotkovdiplom.nomoredomains.rocks';

function getResponseData(res) {
  if (res.ok) {
      return res.json();
  }
  return res.json().then(err => {
    console.log(err)
    return Promise.reject(`Ошибка: ${res.message}`)
   })
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


export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
  .then(response => {
    return getResponseData(response)
  })
  
  .then((data) => {
    console.log(data)
      return data;
  })
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
const BASE_URL = 'https://api.tsyalgen.nomoredomains.club';
// const BASE_URL = 'http://localhost:3001';

//auth
export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email, password, name
    })
  })
    .then(getResponseData)
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(getResponseData)
};

export const checkJWTToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(getResponseData);
};

// movies
export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
    .then(getResponseData);
};

export const saveMovie = (country,
                          director,
                          duration,
                          year,
                          description,
                          image,
                          trailer,
                          nameRU,
                          nameEN,
                          thumbnail,
                          movieId,) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: `${country}`,
      director: `${director}`,
      duration: `${duration}`,
      year: `${year}`,
      description: `${description}`,
      image: `${image}`,
      trailer: `${trailer}`,
      nameRU: `${nameRU}`,
      nameEN: `${nameEN}`,
      thumbnail: `${thumbnail}`,
      movieId: `${movieId}`,
    }),
  })
    .then(getResponseData);
}

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  })
    .then(getResponseData);
}


//profile

export const getProfile = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(getResponseData);
}

export const updateProfile = (email, name) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    }),
  })
    .then(getResponseData)
}

//utils
export const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText} `);
  }

  return res.json();
}
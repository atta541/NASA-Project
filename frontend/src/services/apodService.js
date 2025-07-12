const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/apod`;


export const getApod = async (date = '') => {
  const url = date ? `${BASE_URL}?date=${date}` : BASE_URL;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error ${res.status} – ${res.statusText}`);
  }

  return res.json(); 
};


export const getApodRange = async (start, end) => {
  const url = `${BASE_URL}/range?start_date=${start}&end_date=${end}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error ${res.status} – ${res.statusText}`);
  }

  return res.json();
};

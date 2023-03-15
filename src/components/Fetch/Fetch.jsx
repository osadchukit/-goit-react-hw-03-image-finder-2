// import {searchText}

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34274802-5f1b8cd6204aebf0c3a58caab';

export const getImage = textSearch => {
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${textSearch}&image_type=photo`);
};

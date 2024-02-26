import axios from 'axios';


export async function searchImg(inputValue, userPage) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = '/api/';
  const url = BASE_URL + END_POINT;

  const params = {
    key: '42514527-f0e4c02a7a5e34a1148846eb5',
    q: `${inputValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: userPage,
    per_page: 15,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
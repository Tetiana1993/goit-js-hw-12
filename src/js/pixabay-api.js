export function searchImg(inputValue) {
    const BASE_URL = 'https://pixabay.com/';
    const END_POINT = '/api/';
    const KEY = '?key=42514527-f0e4c02a7a5e34a1148846eb5';
    const PARAMS = `&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;
    const url = BASE_URL + END_POINT + KEY + PARAMS;
  
    return fetch(url).then(res => res.json());
  }
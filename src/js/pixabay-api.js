import axios from 'axios';
export async function fetchImages(keyWord, currentPage) {
    const API_KEY = '42514527-f0e4c02a7a5e34a1148846eb5';
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = {
        key: API_KEY,
        q: keyWord,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: currentPage,
    };    
    const url = `${BASE_URL}${END_POINT}`;
    const response = await axios.get(url, { params })
    return response.data;
}
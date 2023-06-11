import axios from 'axios';

export async function imgApi(query, page) {
  const API_URL = 'https://pixabay.com/api/';
  // параметри запиту на бекенд
  const options = {
    params: {
      key: '35646332-c99e451c5ce06ad1c5a7390a9',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 12,
    },
  };

  const response = await axios.get(API_URL, options);
  return response;
}
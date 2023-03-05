import axios from 'axios';

const KEY = '32700249-946444406968560521eecb27d';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export async function fetchImages(searchQuery, page = 1) {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
}

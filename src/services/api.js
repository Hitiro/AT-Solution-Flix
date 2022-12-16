import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/550?api_key=673345f12c42415b28b7b1e0eb56c22d

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

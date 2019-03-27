import axios from 'axios';

const API_KEY = '562e788df3b47d45f0c605959d4f55ff';

export const getMovieByPopularity = lang =>
  axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );

export const getMovieByTitle = (searchBarValue, lang) =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lang}&query=${searchBarValue}&page=1&include_adult=false`
  );

export const getActorPage = (actorPage, lang) =>
  axios.get(
    `https://api.themoviedb.org/3/person/${actorPage}?api_key=${API_KEY}&language=${lang}`
  );

export const getFilmDatas = (filmPage, lang) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${filmPage}?api_key=${API_KEY}&language=${lang}`
  );

export const getCastDatas = (castPage, lang) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${castPage}/credits?api_key=${API_KEY}&language=${lang}`
  );

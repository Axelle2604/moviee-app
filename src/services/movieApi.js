import axios from 'axios';
import API_KEY from '../auth.js';

export const getMovieByPopularity = async lang => {
  const {
    data: { results: listFilms = [] },
  } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  return listFilms;
};

export const getMovieByTitle = async (searchBarValue, lang) => {
  const {
    data: { results: listFilms = [] },
  } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lang}&query=${searchBarValue}&page=1&include_adult=false`
  );
  return listFilms;
};

export const getActorPage = async (actorPage, lang) => {
  const { data: actor = [] } = await axios.get(
    `https://api.themoviedb.org/3/person/${actorPage}?api_key=${API_KEY}&language=${lang}`
  );
  return actor;
};

export const getFilmDatas = async (filmPage, lang) => {
  const { data: film = [] } = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmPage}?api_key=${API_KEY}&language=${lang}`
  );
  return film;
};

export const getCastDatas = async (castPage, lang) => {
  const {
    data: { cast: cast = [] },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${castPage}/credits?api_key=${API_KEY}&language=${lang}`
  );
  return cast;
};

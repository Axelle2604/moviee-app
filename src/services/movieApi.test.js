import mockAxios from 'jest-mock-axios';
import * as Api from './movieApi.js';
import API_KEY from '../auth.js';

afterEach(() => {
  mockAxios.reset();
});

test('getMovieByPopularity should get all popular movie datas with selected language.', () => {
  const catchFn = jest.fn();
  const thenFn = jest.fn();

  const lang = 'fr-FR';

  Api.getMovieByPopularity(lang)
    .then(thenFn)
    .catch(catchFn);

  expect(mockAxios.get).toHaveBeenCalled();
  expect(mockAxios.get).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );

  const responseObj = { data: {} };
  mockAxios.mockResponse(responseObj);

  expect(thenFn).toHaveBeenCalled();
  expect(catchFn).not.toHaveBeenCalled();
});

test('getMovieByTitle should get movies by title with selected language.', () => {
  const catchFn = jest.fn(),
    thenFn = jest.fn();

  const searchBarValue = 'Aquaman';
  const lang = 'fr-FR';

  Api.getMovieByTitle(searchBarValue, lang)
    .then(thenFn)
    .catch(catchFn);

  expect(mockAxios.get).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lang}&query=${searchBarValue}&page=1&include_adult=false`
  );

  const responseObj = { data: {} };
  mockAxios.mockResponse(responseObj);

  expect(thenFn).toHaveBeenCalledWith({
    config: {},
    headers: {},
    status: 200,
    statusText: 'OK',
    ...responseObj,
  });

  expect(catchFn).not.toHaveBeenCalled();
});

test('getActorPage should get actor page by id with selected language.', () => {
  const catchFn = jest.fn(),
    thenFn = jest.fn();

  const actorPage = '5530';
  const lang = 'fr-FR';

  Api.getActorPage(actorPage, lang)
    .then(thenFn)
    .catch(catchFn);

  expect(mockAxios.get).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/person/${actorPage}?api_key=${API_KEY}&language=${lang}`
  );

  const responseObj = { data: {} };
  mockAxios.mockResponse(responseObj);

  expect(thenFn).toHaveBeenCalledWith({
    config: {},
    headers: {},
    status: 200,
    statusText: 'OK',
    ...responseObj,
  });

  expect(catchFn).not.toHaveBeenCalled();
});

test('getFilmDatas should get film page by id with selected language.', () => {
  const catchFn = jest.fn(),
    thenFn = jest.fn();

  const filmPage = '450465';
  const lang = 'fr-FR';

  Api.getFilmDatas(filmPage, lang)
    .then(thenFn)
    .catch(catchFn);

  expect(mockAxios.get).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/movie/${filmPage}?api_key=${API_KEY}&language=${lang}`
  );

  const responseObj = { data: {} };
  mockAxios.mockResponse(responseObj);

  expect(thenFn).toHaveBeenCalledWith({
    config: {},
    headers: {},
    status: 200,
    statusText: 'OK',
    ...responseObj,
  });

  expect(catchFn).not.toHaveBeenCalled();
});

test('getCastDatas should get cast page by id with selected language.', () => {
  const catchFn = jest.fn(),
    thenFn = jest.fn();

  const castPage = '450465';
  const lang = 'fr-FR';

  Api.getCastDatas(castPage, lang)
    .then(thenFn)
    .catch(catchFn);

  expect(mockAxios.get).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/movie/${castPage}/credits?api_key=${API_KEY}&language=${lang}`
  );

  const responseObj = { data: {} };
  mockAxios.mockResponse(responseObj);

  expect(thenFn).toHaveBeenCalledWith({
    config: {},
    headers: {},
    status: 200,
    statusText: 'OK',
    ...responseObj,
  });

  expect(catchFn).not.toHaveBeenCalled();
});

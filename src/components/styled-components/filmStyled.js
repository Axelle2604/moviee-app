import styled from 'styled-components';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';
const IMG_FILM = '/img/filmCouv.jpg';

export const TextContainer = styled.div`
  display: none;
  transition: 0.5s;
  height: 300px;
`;

export const FilmContainer = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  margin: 20px;
  &:hover ${TextContainer} {
    background-color: black;
    color: #40e0d0;
    text-align: center;
    z-index: 2;
    width: 100%;
    position: absolute;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 5px 1px #282828;
  background-size: cover;
  background-position: center;
  background-image: url(${({ img }) =>
    img ? `${BASE_URL}${img}` : `${IMG_FILM}`});
`;

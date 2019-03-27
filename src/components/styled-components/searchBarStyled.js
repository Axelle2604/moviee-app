import styled from 'styled-components';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';
const IMG_FILM = '/img/filmCouv.jpg';

export const SearchBarContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  padding: 20px;
  border: solid 1px #bdbdbd;
  flex-direction: column;
  z-index: 10;
  position: relative;
  justify-content: center;
  &:hover {
    border-color: #40e0d0;
    transition: 400ms;
  }
  & input {
    width: 100%;
    border: none;
    margin-left: 10px;
    &:focus {
      outline: none;
      color: #282828;
      transition: 400ms;
    }
  }
  & i.fas.fa-eraser {
    transition: 200ms;
    font-size: 20px;
    &:hover {
      color: #40e0d0;
      transition: 200ms;
      cursor: pointer;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  position: absolute;
  background-color: white;
  border: solid 1px grey;
  width: 100%;
  top: 62px;
  left: 0px;
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${({ img }) => (img ? `${BASE_URL}${img}` : IMG_FILM)});
  background-position: center;
  background-size: cover;
`;

export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin: 5px;
  justify-content: space-between;
  transition: 0.2s;
  color: black;
  border-right: solid 5px grey;
  &:hover {
    background-color: #40e0d0;
    cursor: pointer;
    transition: 0.2s;
    border-right: solid 5px #282828;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  & .title {
    font-weight: 800;
  }
`;

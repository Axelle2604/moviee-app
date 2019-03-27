import styled from 'styled-components';

const BASE_URL = 'https://image.tmdb.org/t/p/original';
const IMG_GUEST = '/img/guest.png';

export const ActorContainer = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  margin: 10px;
  box-shadow: 0px 0px 5px 1px #282828;
`;

export const ImageContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  background-image: url(${({ img }) =>
    img ? `${BASE_URL}${img}` : IMG_GUEST});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.4s;
  &:hover {
    filter: grayscale(80%);
    transition: 0.4s;
  }
`;

export const TextContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

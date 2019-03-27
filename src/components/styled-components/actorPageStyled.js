import styled from 'styled-components';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';
const IMG_GUEST = '/img/guest.png';

export const ActorPageContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  flex: 1 1 50%;
  min-height: 400px;
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(${({ img }) =>
    img ? `${BASE_URL}${img}` : `${IMG_GUEST}`});
`;

export const TextContainer = styled.div`
  flex: 1 1 50%;
`;

export const TextBold = styled.span`
  font-weight: bold;
`;

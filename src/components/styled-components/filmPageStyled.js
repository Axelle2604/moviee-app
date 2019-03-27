import styled from 'styled-components';

export const FilmContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  flex: 1 1 50%;
  min-height: 400px;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) =>
    `https://image.tmdb.org/t/p/original/${img}`});
`;

export const TextContainer = styled.div`
  flex: 1 1 50%;
`;

export const TextBold = styled.span`
  font-weight: bold;
`;

export const CastContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ActorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const SeeMoreButton = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  background-color: white;
  border-style: none;
  font-weight: 600;
  color: #95a5a6;
  text-decoration: underline;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    color: black;
    transition: 0.4s;
  }
`;

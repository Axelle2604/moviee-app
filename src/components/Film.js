import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { withLangage } from './utils/withLangage';
import PropTypes from 'prop-types';
import {
  FilmContainer,
  ImageContainer,
  TextContainer,
} from './styled-components/filmStyled';

const Film = ({ id, title, date, image }) => (
  <FilmContainer>
    <Link to={`/movie/${id}`}>
      <TextContainer>
        <h3>{title}</h3>
        <div>{date}</div>
      </TextContainer>
      <ImageContainer img={image} />
    </Link>
  </FilmContainer>
);

export default withLangage(memo(Film));

Film.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
};

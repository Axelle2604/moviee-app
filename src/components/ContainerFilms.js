import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Film from './Film.js';
import { translateWord } from './utils/changeLang';
import { withLangage } from './utils/withLangage';
import {
  FilmsContainer,
  FilmsSubContainer,
} from './styled-components/containerFilmsStyled';

const ContainerFilms = ({ langValue, listFilms }) => (
  <FilmsContainer>
    <h2>{translateWord('NewReleases', langValue)}</h2>
    <FilmsSubContainer>
      {listFilms.map(({ poster_path, title, id, release_date }) => (
        <Film
          image={poster_path}
          title={title}
          key={id}
          id={id}
          date={release_date}
        />
      ))}
    </FilmsSubContainer>
  </FilmsContainer>
);

export default withLangage(memo(ContainerFilms));

ContainerFilms.propTypes = {
  listFilms: PropTypes.array,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  release_date: PropTypes.string,
};

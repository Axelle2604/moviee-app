import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withLangage } from './utils/withLangage';
import {
  ActorContainer,
  ImageContainer,
  TextContainer,
} from './styled-components/actorStyled';

const Actor = ({ id = Date.now(), image, character }) => {
  return (
    <ActorContainer>
      <Link to={`/actor/${id}`}>
        <ImageContainer img={image} />
      </Link>
      <TextContainer>{character}</TextContainer>
    </ActorContainer>
  );
};

export default withLangage(memo(Actor));

Actor.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  character: PropTypes.string,
};

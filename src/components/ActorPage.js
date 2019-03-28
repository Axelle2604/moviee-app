import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getActorPage } from '../services/movieApi.js';
import { withLangage } from './utils/withLangage';
import { translateWord } from './utils/changeLang';
import {
  ActorPageContainer,
  ImageContainer,
  TextContainer,
  TextBold,
} from './styled-components/actorPageStyled';

class ActorPage extends PureComponent {
  state = {
    infoActor: [],
  };

  componentDidMount = () => this.loadData();

  componentDidUpdate = ({ langValue }) =>
    langValue !== this.props.langValue && this.loadData();

  loadData = async () => {
    const {
      match: {
        params: { actorPage },
      },
      langValue,
    } = this.props;
    this.setState({
      infoActor: await getActorPage(actorPage, langValue),
    });
  };

  render() {
    const {
      infoActor: {
        profile_path: imgPath,
        name,
        birthday,
        deathday,
        biography,
        place_of_birth: placeOfBirth,
      },
    } = this.state;
    const { langValue } = this.props;
    return (
      <ActorPageContainer>
        <ImageContainer img={imgPath} />
        <TextContainer>
          <h2>{name}</h2>
          <p>
            <TextBold>{translateWord('Birthday', langValue)}</TextBold>
            {birthday ? birthday : translateWord('NotSpecified', langValue)}
          </p>
          <p>
            <TextBold>{translateWord('BirthPlace', langValue)}</TextBold>
            {placeOfBirth
              ? placeOfBirth
              : translateWord('NotSpecified', langValue)}
          </p>
          <p>
            <TextBold>{translateWord('Deathday', langValue)}</TextBold>
            {deathday ? deathday : translateWord('NotSpecified', langValue)}
          </p>
          <p>
            <TextBold>{translateWord('Biography', langValue)}</TextBold>
            {biography ? biography : translateWord('NotSpecified', langValue)}
          </p>
        </TextContainer>
      </ActorPageContainer>
    );
  }
}

export default withLangage(ActorPage);

ActorPage.propTypes = {
  infoActor: PropTypes.array,
  langValue: PropTypes.string.isRequired,
};

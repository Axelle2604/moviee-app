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
    const { data } = await getActorPage(actorPage, langValue);
    this.setState({
      infoActor: data,
    });
  };

  render() {
    const {
      infoActor: {
        profile_path,
        name,
        birthday,
        deathday,
        biography,
        place_of_birth,
      },
    } = this.state;
    const { langValue } = this.props;
    return (
      <ActorPageContainer>
        <ImageContainer img={profile_path} />
        <TextContainer>
          <h2>{name}</h2>
          <p>
            <TextBold>{translateWord('birthday', langValue)}</TextBold>
            {birthday}
          </p>
          <p>
            <TextBold>{translateWord('birthPlace', langValue)}</TextBold>
            {place_of_birth}
          </p>
          <p>
            <TextBold>{translateWord('deathday', langValue)}</TextBold>
            {deathday ? deathday : translateWord('notSpecified', langValue)}
          </p>
          <p>
            <TextBold>{translateWord('biography', langValue)}</TextBold>
            {biography ? biography : translateWord('notSpecified', langValue)}
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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Actor from './Actor.js';
import { withLangage } from './utils/withLangage';
import { translateWord } from './utils/changeLang';
import { getFilmDatas, getCastDatas } from '../services/movieApi.js';
import {
  FilmContainer,
  InfoContainer,
  ImageContainer,
  TextContainer,
  TextBold,
  CastContainer,
  ActorsContainer,
  SeeMoreButton,
} from './styled-components/filmPageStyled';

class FilmPage extends PureComponent {
  state = {
    infoFilm: [],
    castFilm: [],
    isFiveFirstCast: true,
  };

  componentDidMount = () => {
    const {
      match: {
        params: { filmPage },
      },
      langValue,
    } = this.props;
    this.loadData(filmPage, langValue);
  };

  componentDidUpdate = ({ langValue }) =>
    langValue !== this.props.langValue && this.loadData();

  getFilmData = async (filmId, lang) => await getFilmDatas(filmId, lang);

  getCastData = async (filmId, lang) => await getCastDatas(filmId, lang);

  loadData = async () => {
    const {
      match: {
        params: { filmPage },
      },
      langValue,
    } = this.props;
    const [infoFilm, castFilm] = await Promise.all([
      this.getFilmData(filmPage, langValue),
      this.getCastData(filmPage, langValue),
    ]);
    this.setState({ infoFilm, castFilm });
  };

  onClickSeeMore = () => this.setState({ isFiveFirstCast: false });

  render() {
    const { langValue } = this.props;
    const {
      infoFilm: {
        data: {
          poster_path = [translateWord('notSpecified', langValue)],
          title = [translateWord('notSpecified', langValue)],
          release_date = [translateWord('notSpecified', langValue)],
          vote_average = [translateWord('notSpecified', langValue)],
          vote_count = [translateWord('notSpecified', langValue)],
          genres = [translateWord('notSpecified', langValue)],
          overview = [translateWord('notSpecified', langValue)],
        } = {},
      },
      castFilm: {
        data: { cast = [translateWord('notSpecified', langValue)] } = {},
      },
      isFiveFirstCast,
    } = this.state;
    const fiveFirstCast = cast.slice(0, 5);
    const otherCast = cast.slice(5);

    return (
      <FilmContainer>
        <InfoContainer>
          <ImageContainer img={poster_path} />
          <TextContainer>
            <h2>{title}</h2>
            <p>
              <TextBold>{translateWord('releaseDate', langValue)}</TextBold>
              {release_date}
            </p>
            <p>
              <TextBold>{translateWord('rating', langValue)}</TextBold>
              {vote_average}
            </p>
            <p>
              <TextBold>{translateWord('voteCount', langValue)}</TextBold>
              {vote_count}
            </p>
            <p>
              <TextBold>{translateWord('genres', langValue)}</TextBold>
              {genres.map(({ id = Date.now(), name }, index) => (
                <span key={id}>
                  {name}
                  {index !== genres.length - 1 && ', '}
                </span>
              ))}
            </p>
            <p>{overview}</p>
          </TextContainer>
        </InfoContainer>
        <CastContainer>
          <h3>{translateWord('cast', langValue)}</h3>
          <ActorsContainer>
            {fiveFirstCast.map(
              ({ character, name, profile_path, id = Date.now() }) => (
                <Actor
                  character={character}
                  name={name}
                  image={profile_path}
                  id={id}
                  key={id}
                />
              )
            )}
            {!isFiveFirstCast &&
              otherCast.map(
                ({ character, name, profile_path, id = Date.now() }) => (
                  <Actor
                    character={character}
                    name={name}
                    image={profile_path}
                    id={id}
                    key={id}
                  />
                )
              )}
          </ActorsContainer>
          {isFiveFirstCast && otherCast.length > 0 && (
            <SeeMoreButton onClick={this.onClickSeeMore}>
              see more
            </SeeMoreButton>
          )}
        </CastContainer>
      </FilmContainer>
    );
  }
}

export default withLangage(FilmPage);

FilmPage.propTypes = {
  infoFilm: PropTypes.array,
  castFilm: PropTypes.array,
  isFiveFirstCast: PropTypes.bool,
  langValue: PropTypes.string.isRequired,
};

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

  loadData = async () => {
    const {
      match: {
        params: { filmPage },
      },
      langValue,
    } = this.props;
    const [infoFilm, castFilm] = await Promise.all([
      await getFilmDatas(filmPage, langValue),
      await getCastDatas(filmPage, langValue),
    ]);
    this.setState({ infoFilm, castFilm });
  };

  onClickSeeMore = () => this.setState({ isFiveFirstCast: false });

  render() {
    const { langValue } = this.props;
    const {
      infoFilm: {
        poster_path: imgPath,
        title,
        release_date: releaseDate,
        vote_average: voteAverage,
        vote_count: voteCount,
        genres = [],
        overview = [translateWord('NotSpecified', langValue)],
      } = {},
      castFilm,
      isFiveFirstCast,
    } = this.state;

    const fiveFirstCast = castFilm.slice(0, 5);
    const otherCast = castFilm.slice(5);

    return (
      <FilmContainer>
        <InfoContainer>
          <ImageContainer img={imgPath} />
          <TextContainer>
            <h2>{title}</h2>
            <p>
              <TextBold>{translateWord('ReleaseDate', langValue)}</TextBold>
              {releaseDate}
            </p>
            <p>
              <TextBold>{translateWord('Rating', langValue)}</TextBold>
              {voteAverage}
            </p>
            <p>
              <TextBold>{translateWord('VoteCount', langValue)}</TextBold>
              {voteCount}
            </p>
            <p>
              <TextBold>{translateWord('Genres', langValue)}</TextBold>
              {genres.length > 0
                ? genres.map(({ id, name }, index) => (
                    <span key={id}>
                      {name}
                      {index !== genres.length - 1 && ', '}
                    </span>
                  ))
                : translateWord('NotSpecified', langValue)}
            </p>
            <p>{overview}</p>
          </TextContainer>
        </InfoContainer>
        <CastContainer>
          <h3>{translateWord('Cast', langValue)}</h3>
          <ActorsContainer>
            {fiveFirstCast.map(({ character, name, profile_path, id }) => {
              return (
                <Actor
                  character={character}
                  name={name}
                  image={profile_path}
                  id={id}
                  key={id}
                />
              );
            })}
            {!isFiveFirstCast &&
              otherCast.map(({ character, name, profile_path, id }) => (
                <Actor
                  character={character}
                  name={name}
                  image={profile_path}
                  id={id}
                  key={id}
                />
              ))}
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

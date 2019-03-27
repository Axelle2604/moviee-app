import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withLangage } from './utils/withLangage';
import { translateWord } from './utils/changeLang';
import {
  SearchBarContainer,
  SearchResultsContainer,
  InputContainer,
  ImageContainer,
  ResultContainer,
  TextContainer,
} from './styled-components/searchBarStyled';

const SearchBar = ({
  getFilmSearch,
  setFocusSearchBar,
  isFocus,
  listFilms,
  langValue,
}) => {
  const onChangeEvent = ({ target: { value } }) => {
    !isFocus && setFocusSearchBar(true);
    value.length > 0 && getFilmSearch(value);
  };

  const onClickSearchBar = () => {
    !isFocus ? setFocusSearchBar(true) : setFocusSearchBar(false);
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <i className="fas fa-search" />
        <input
          type="text"
          placeholder="Search a movie"
          onChange={onChangeEvent.bind(this)}
          onClick={onClickSearchBar}
        />
        {listFilms.length > 0 && (
          <i className="fas fa-eraser" onClick={onClickSearchBar} />
        )}
      </InputContainer>

      {isFocus && (
        <SearchResultsContainer onClick={onClickSearchBar}>
          {listFilms.length > 0 ? (
            listFilms.map(({ id, poster_path, title, release_date }) => (
              <NavLink
                to={`/movie/${id}`}
                style={{ textDecoration: 'none' }}
                key={id}
              >
                <ResultContainer key={id}>
                  <ImageContainer img={poster_path} />
                  <TextContainer>
                    <span className="title">{title}</span>
                  </TextContainer>
                  <TextContainer>
                    <span>{release_date}</span>
                  </TextContainer>
                </ResultContainer>
              </NavLink>
            ))
          ) : (
            <ResultContainer>
              {translateWord('noResult', langValue)}
            </ResultContainer>
          )}
        </SearchResultsContainer>
      )}
    </SearchBarContainer>
  );
};

export default withLangage(memo(SearchBar));

SearchBar.propTypes = {
  onChangeEvent: PropTypes.func,
  onClickSearchBar: PropTypes.func,
  getFilmSearch: PropTypes.func,
  setFocusSearchBar: PropTypes.func,
  isFocus: PropTypes.bool,
  listFilms: PropTypes.array,
};

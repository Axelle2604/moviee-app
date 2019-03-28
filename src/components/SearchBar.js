import React, { memo } from 'react';
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
  NavLinkStyled,
} from './styled-components/searchBarStyled';

const SearchBar = ({
  getFilmSearch,
  setFocusSearchBar,
  isFocus,
  listFilms,
  langValue,
  searchBarValue,
  resetSearchBar,
}) => {
  const onChangeEvent = ({ target: { value } }) => {
    !isFocus && setFocusSearchBar(true);
    value.length > 0 && getFilmSearch(value);
  };

  const onClickSearchBar = () => {
    !isFocus ? setFocusSearchBar(true) : setFocusSearchBar(false);
    resetSearchBar();
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <i className="fas fa-search" onClick={onClickSearchBar} />
        <input
          type="text"
          placeholder="Search a movie"
          onChange={onChangeEvent.bind(this)}
          onClick={onClickSearchBar}
          value={searchBarValue}
        />
        {searchBarValue.length > 0 && (
          <i className="fas fa-eraser" onClick={onClickSearchBar} />
        )}
      </InputContainer>

      {isFocus && (
        <SearchResultsContainer onClick={onClickSearchBar}>
          {listFilms.length > 0 ? (
            listFilms.map(({ id, poster_path, title, release_date }) => (
              <NavLinkStyled to={`/movie/${id}`} key={id}>
                <ResultContainer key={id}>
                  <ImageContainer img={poster_path} />
                  <TextContainer>
                    <span className="title">{title}</span>
                  </TextContainer>
                  <TextContainer>
                    <span>{release_date}</span>
                  </TextContainer>
                </ResultContainer>
              </NavLinkStyled>
            ))
          ) : (
            <ResultContainer>
              {translateWord('NoResult', langValue)}
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

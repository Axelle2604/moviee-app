import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import FilmPage from './components/FilmPage.js';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import ContainerFilms from './components/ContainerFilms.js';
import ActorPage from './components/ActorPage.js';
import Footer from './components/Footer.js';
import { LangContext } from './components/contexts/LangContext';
import { getMovieByPopularity, getMovieByTitle } from './services/movieApi.js';

class App extends PureComponent {
  state = {
    listFilms: [],
    searchBarValue: '',
    isFocus: false,
    langValue: 'fr',
    toggleLang: this.toggleLang.bind(this),
    newReleasedFilms: [],
  };

  componentDidMount = () => this.loadData(this.state.langValue);

  componentDidUpdate = (prevProps, { langValue }) => {
    langValue !== this.state.langValue && this.loadData(this.state.langValue);
  };

  toggleLang() {
    this.setState(({ langValue }) => ({
      langValue: langValue === 'en' ? 'fr' : 'en',
    }));
  }

  loadData = async lang => {
    const {
      data: { results },
    } = await getMovieByPopularity(lang);
    this.setState({
      newReleasedFilms: results,
    });
  };

  getFilmByTitle = async () => {
    const { searchBarValue, langValue } = this.state;
    const {
      data: { results },
    } = await getMovieByTitle(searchBarValue, langValue);
    this.setState({
      listFilms: results,
    });
  };

  getFilmSearch = searchBarValue => {
    this.setState(
      {
        searchBarValue,
      },
      () => this.getFilmByTitle()
    );
  };

  setFocusSearchBar = bool => this.setState({ isFocus: bool });

  render() {
    const { listFilms, isFocus, newReleasedFilms } = this.state;
    const fiveFirstResults = listFilms.slice(0, 5);
    return (
      <BrowserRouter>
        <div className="App">
          <LangContext.Provider value={this.state}>
            <LangContext.Consumer>
              {({ langValue, toggleLang }) => (
                <Header langValue={langValue} toggleLang={toggleLang} />
              )}
            </LangContext.Consumer>
            <SearchBar
              getFilmSearch={this.getFilmSearch}
              listFilms={fiveFirstResults}
              setFocusSearchBar={this.setFocusSearchBar}
              isFocus={isFocus}
            />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location && location.key}
                    classNames="page"
                    timeout={500}
                    appear
                    unmountOnExit
                  >
                    <Switch location={location}>
                      <Route
                        exact
                        path="/"
                        render={() => (
                          <ContainerFilms listFilms={newReleasedFilms} />
                        )}
                      />

                      <Route
                        exact
                        path="/movie/:filmPage"
                        component={FilmPage}
                      />
                      <Route
                        exact
                        path="/actor/:actorPage"
                        component={ActorPage}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
            <Footer />
          </LangContext.Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

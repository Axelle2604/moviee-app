import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { translateWord } from './utils/changeLang';

import {
  HeaderContainer,
  Logo,
  TextContainer,
  Title,
  SubLogo,
  TextBold,
  LangButton,
} from './styled-components/headerStyled';

class Header extends PureComponent {
  render() {
    const { toggleLang, langValue } = this.props;
    return (
      <HeaderContainer>
        <Logo>
          <SubLogo className="fas fa-play-circle" />
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Title>Moviee</Title>
          </NavLink>
        </Logo>
        <TextContainer>
          <TextBold>
            {translateWord('realizedBy', langValue)}Axelle DRU
          </TextBold>
          <TextBold>API: The Movie Database</TextBold>
          <LangButton onClick={toggleLang}>
            {translateWord('switchLang', langValue)}
          </LangButton>
        </TextContainer>
      </HeaderContainer>
    );
  }
}

export default Header;

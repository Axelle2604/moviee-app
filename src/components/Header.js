import React, { PureComponent } from 'react';
import { translateWord } from './utils/changeLang';

import {
  HeaderContainer,
  Logo,
  TextContainer,
  Title,
  SubLogo,
  TextBold,
  LangButton,
  StyledNavLink,
} from './styled-components/headerStyled';

class Header extends PureComponent {
  render() {
    const { toggleLang, langValue } = this.props;
    return (
      <HeaderContainer>
        <Logo>
          <SubLogo className="fas fa-play-circle" />
          <StyledNavLink to="/">
            <Title>Moviee</Title>
          </StyledNavLink>
        </Logo>
        <TextContainer>
          <TextBold>
            {translateWord('RealizedBy', langValue)}Axelle DRU
          </TextBold>
          <TextBold>API: The Movie Database</TextBold>
          <LangButton onClick={toggleLang}>
            {translateWord('SwitchLang', langValue)}
          </LangButton>
        </TextContainer>
      </HeaderContainer>
    );
  }
}

export default Header;

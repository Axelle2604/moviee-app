import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 60vw;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  * {
    box-sizing: border-box;
  }
`;

export const ContainerTransition = styled.div`
  &.page-appear,
  &.page-enter {
    opacity: 0;
    transform: translateX(100vw);
  }

  &.page-appear-active,
  &.page-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 500ms;
  }

  &.page-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.page-exit-active {
    opacity: 0;
    transform: translateX(-100vw);
    transition: 500ms;
  }
`;

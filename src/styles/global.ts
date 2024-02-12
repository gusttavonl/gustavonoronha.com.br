import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: Trobika;
    src: local(Trobika-Regular);
    url('/fonts/Trobika-Regular.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Trobika;
    src: local(Linearicons);
    url('/fonts/Linearicons.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.gray800};
      `}
    }

    h1,
    h2,
    h3,
    h4 {
      font-family: 'Trobika';
      font-weight: ${theme.font.normal};
      color: ${theme.colors.infomain};
    }

    p {
      font-family: 'Trobika';
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.body1};
    }
  `}
`

export default GlobalStyles

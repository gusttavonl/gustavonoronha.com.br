export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Trobika, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    icon: "Trobika, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    light: 300,
    normal: 400,
    semiBold: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      h1: '40px',
      h2: '32px',
      h3: '24px',
      h4: '20px',
      body1: '16px',
      body2: '16px',
      body3: '16px',
      button: '16px',
      overline: '10px'
    }
  },
  colors: {
    primary: '#FF7818',
    primarydark: '#FF4F18',
    primarylight: '#FFAE77',
    secondary: '#008196',
    secondarydark: '#005765',
    secondarylight: '#00B4D1',
    infodark: '#3579DD',
    infomain: '#3699FF',
    infolight: '#72B8FF',
    sucess: '#1BC5BD',
    sucessdark: '#26B5AB',
    sucesslight: '#80C9C3',
    warning: '#FFA800',
    warningdark: '#FB8F00',
    warninglight: '#FFE2B4',
    danger: '#EC2A43',
    dangerdark: '#F64E60',
    dangerlight: '#FFAAB2',
    gray100: '#F8F9FC',
    gray200: '#F1F3F9',
    gray300: '#DEE3ED',
    gray400: '#C2C9D6',
    gray500: '#8F96A3',
    gray600: '#5E636E',
    gray700: '#2F3237',
    gray800: '#1D1E20'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const

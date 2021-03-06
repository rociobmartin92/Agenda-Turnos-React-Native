import {extendTheme} from 'native-base';

const theme = extendTheme({
  colors: {
    secondary: {
      50: '',
      100: '',
      200: '#fbcfe8',
      300: '',
      400: '',
      500: '',
      600: '#db2777',
      700: '',
      800: '',
      900: '#831843',
    },
    success: {
      700: '#15803d',
      900: '#14532d',
    },
    rose: {
      500: '#f43f5e',
      600: '#e11d48',
    },
    lightBlue: {
      500: '#0ea5e9',
      600: '#0284c7',
      900: '#0c4a6e',
    },
    green: {
      500: '#22c55e',
      600: '#16a34a',
      900: '#14532d',
    },

    yellow: {
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
    },
    red: {
      600: '#ef4444',
      700: '#b91c1c',
    },
  },

  typography: {
    letterSpacings: {
      xs: '-0.05em',
      sm: '-0.025em',
      md: 0,
      lg: '0.025em',
      xl: '0.05em',
      '2xl': '0.1em',
    },
    lineHeights: {
      '2xs': '1em',
      xs: '1.125em',
      sm: '1.25em',
      md: '1.375em',
      lg: '1.5em',
      xl: '1.75em',
      '2xl': '2em',
      '3xl': '2.5em',
      '4xl': '3em',
      '5xl': '4em',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      extrablack: 950,
    },

    fontConfig: {
      Roboto: {
        100: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
      },
    },

    fonts: {
      heading: undefined,
      body: undefined,
      mono: undefined,
    },

    fontSizes: {
      xxs: 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
  },

  opacity: {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1,
  },

 
});

export default theme;

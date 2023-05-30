import { colorGenerator } from './colorGenerator';

const colors = {
  app: { ...colorGenerator('#43494A') },
  blue: { ...colorGenerator('#365880') },
  purple: { ...colorGenerator('#9876AA') },
  red: { ...colorGenerator('#FF5261') },
  orange: { ...colorGenerator('#CB7832') },
  green: { ...colorGenerator('#50A661') },
  neutral: { ...colorGenerator('#FEFEFE') },
  dark: { ...colorGenerator('#000611') },
  text: { ...colorGenerator('#BBBBBB') },
};

export const palette = {
  module: 'light',
  text: {
    primary: '#2B2B2B',
    secondary: 'rgba(43,43,43,0.7)',
    inverse: '#BBBBBB',
    default: '#BBBBBB',
    disabled: '#777777',
    dark: '#2B2B2B',
    selected: '#FEFEFE',
    link: '#589DF6',
    linkPressed: '#BA6F25',
    muted: 'rgba(43,43,43,0.3)',
    infoInput: '#787878',
    error: '#f56c78',
    success: '#50A661',
  },

  app: {
    main: colors.app[500],
    border: 'rgba(0, 0, 0, 0.12)',
    shadow:'0px 1px 5px -4px rgba(0,0,0,0.61)',
    bg: colors.neutral[500],
    bgInverse: colors.neutral[600],
    cardBg: "hsl(212.4deg 100% 89.27% / 23%)",
    ...colors.app,
  },
  primary: {
    // main: colors.orange[500],
    main: '#1990a7',
    ...colors.orange,
  },
  secondary: {
    main: colors.purple[500],
    ...colors.purple,
  },
  info: {
    main: colors.blue[500],
    ...colors.blue,
  },
  alert: {
    main: colors.red[500],
    ...colors.red,
  },
  warning: {
    main: colors.orange[500],
    ...colors.orange,
  },
  success: {
    main: colors.green[500],
    ...colors.green,
  },
  action: {
    active: '#1990a7',
  },

  dark: { ...colors.dark },
  red: { ...colors.red },
  orange: { ...colors.orange },
  green: { ...colors.green },
  blue: { ...colors.blue },
  neutral: { ...colors.neutral },
  purple: { ...colors.purple },
};

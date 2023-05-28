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
  module: 'dark',
  text: {
    primary: '#BBBBBB',
    secondary: 'rgba(187,187,187,0.7)',
    inverse: '#2B2B2B',
    default: '#BBBBBB',
    disabled: '#777777',
    dark: '#BBBBBB',
    link: '#589DF6',
    muted: 'rgba(187,187,187,0.3)',
    error: '#f56c78',
    linkPressed: '#BA6F25',
    success: '#50A661',
  },
  // hsl(212.4deg 32.24% 21.27%)hsl(212.4deg 100% 89.27%)
  app: {
    main: colors.app[500],
    bg: colors.blue[1000],
    bgInverse: colors.dark[500],
    cardBg: "hsl(212.4deg 32.24% 21.27%)",
    border: 'rgba(255,255,255,0.12)',
    shadow:'0px 1px 5px -4px rgba(255,255,255,0.61)',
    ...colors.app,
  },
  primary: {
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

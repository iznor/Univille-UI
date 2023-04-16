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
    primary: '#BBBBBB',
    default: '#BBBBBB',
    disabled: '#777777',
    dark: '#2B2B2B',
    selected: '#FEFEFE',
    link: '#589DF6',
    linkPressed: '#BA6F25',
    infoPanel: '#8C8C8C',
    infoInput: '#787878',
    error: '#FF5261',
    success: '#50A661',
  },

  app: {
    main: colors.app[500],
    ...colors.app,
  },
  primary: {
    main: colors.orange[500],
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

  dark: { ...colors.dark },
  red: { ...colors.red },
  orange: { ...colors.orange },
  green: { ...colors.green },
  blue: { ...colors.blue },
  neutral: { ...colors.neutral },
};

import { ComponentThemeFn } from '../types';

export const MuiCardOverride: ComponentThemeFn['MuiCard'] = (theme) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {},
    },
    variants: [
      // {
      //     props: { variant: 'full' },
      //     style: {backgroundColor: theme.palette.panel.bgDialog},
      // },
      // {
      //     props: { variant: 'transparent' },
      //     style: {backgroundColor: theme.palette.app.bgDark },
      // },
    ],
  };
};
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    full: true;
    transparent: true;
  }
}

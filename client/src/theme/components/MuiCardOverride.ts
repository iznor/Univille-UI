import { ComponentThemeFn } from '../types';

export const MuiCardOverride: ComponentThemeFn['MuiCard'] = (theme) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {
        boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 1px 3px 0 rgba(0,0,0,0.1)',
      },
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

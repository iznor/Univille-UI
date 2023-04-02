import { ComponentThemeFn } from '../types';

export const MuiButtonOverride: ComponentThemeFn['MuiButton'] = (theme) => {
  console.log(theme);
  return {
    defaultProps: {},
    styleOverrides: {
      root: {
        textTransform: 'capitalize',
      },
    },
  };
};

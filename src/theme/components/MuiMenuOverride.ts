import { ComponentThemeFn } from '../types';

export const MuiMenuOverride: ComponentThemeFn['MuiMenu'] = (theme) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {},
      list: {
        li: {
          fontSize: '13px',
        },
      },
    },
    variants: [],
  };
};

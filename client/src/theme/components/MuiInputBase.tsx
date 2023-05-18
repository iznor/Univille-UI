import { ComponentThemeFn } from '../types';

export const MuiInputBaseOverride: ComponentThemeFn['MuiInputBase'] = (
  theme
) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {},
      focused: {},
    },
    variants: [],
  };
};

import { ComponentThemeFn } from '../types';

export const MuiTextFieldOverride: ComponentThemeFn['MuiTextField'] = (
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

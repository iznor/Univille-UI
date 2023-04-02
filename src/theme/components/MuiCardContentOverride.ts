// MuiCardContentOverride.ts
import { ComponentThemeFn } from '../types';

export const MuiCardContentOverride: ComponentThemeFn['MuiCardContent'] = (
  theme
) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {
        padding: 0,
        paddingBottom: 0,
        margin: 0,
      },
    },
    variants: [],
  };
};

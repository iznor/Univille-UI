import { ComponentThemeFn } from '../types';

export const MuiCardHeaderOverride: ComponentThemeFn['MuiCardHeader'] = (
  theme
) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {
        '&.active': {
          backgroundColor: theme.palette.orange[100],
        },
        backgroundColor: theme.palette.neutral[500],
      },
    },
  };
};

import { ComponentThemeFn } from '../types';

export const MuiAlertOverride: ComponentThemeFn['MuiAlert'] = (theme) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {
        // backgroundColor: theme['app'][500]
      },
      standardSuccess: {
        // color: theme['neutral'][800],
        '.MuiAlert-icon': {
          // color: theme['green'][800]
        },
      },
      standardError: {
        // color: theme['neutral'][800],
        '.MuiAlert-icon': {
          // color: theme['red'][800]
        },
      },
    },
    variants: [],
  };
};

import { ComponentThemeFn } from '../types';

export const MuiCssBaselineOverride = (theme) => {
  return {
    styleOverrides: (themeParam) => ({
      html: { overflowY: 'overlay' },
      root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      body: {
        color: themeParam.palette.text[500],
        backgroundColor: themeParam.palette.dark[100],
        overflowX: 'hidden',
        letterSpacing: '0.03em',
        display: 'unset',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      p: {
        color: themeParam.palette.text[500],
      },
      '&::-webkit-scrollbar': {
        width: 7,
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: `${themeParam.palette.blue[100]} !important`,
        // outline: `1px solid slategrey !important`,
        border: `1px solid ${themeParam.palette.blue[500]}  !important`,
        borderRadius: 3,
      },
    }),
  };
};

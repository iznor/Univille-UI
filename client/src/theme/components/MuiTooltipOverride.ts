import { ComponentThemeFn } from '../types';

export const MuiTooltipOverride: ComponentThemeFn['MuiButton'] = (theme) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {
        // borderRadius: 1,
        // color:theme.palette.grey[49]
        '& .MuiPaper-root': {
          backgroundColor: theme.palette.secondary[500],
          // borderColor: 'app.100',
          color: theme.palette.text['default'],
          borderRadius: '4px',
          // borderStyle:'solid',
          // borderWidth: '0.5px',
          padding: '5px',
        },
      },
    },
    variants: [],
  };
};

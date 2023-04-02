// MuiPopoverOverride
import { ComponentThemeFn } from '../types';

export const MuiPopoverOverride: ComponentThemeFn['MuiPopover'] = (theme) => {
  return {
    defaultProps: {},
    styleOverrides: {
      paper: {
        '& .MuiList-root': {
          padding: 8,
          '& li:first-of-type': {
            fontSize: 12,
            fontWeight: 600,
            padding: '6px 16px',
          },
          '& li': {
            padding: 0,
          },
          '& li label': {
            padding: 0,
            '& span': {
              fontSize: '13px !important',
            },
            '& svg': {
              width: 18,
              height: 18,
            },
          },
        },
      },
    },
    variants: [],
  };
};

import { ComponentThemeFn } from '../types';

export const MuiCheckboxOverride: ComponentThemeFn['MuiCheckbox'] = (theme) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {
        '&.desktop-checkbox-subvariant': {
          color: 'transparent',
          // paddingBottom: 5,
          '& svg': {
            // width: 14,
            // height: 14,
          },
          '&.Mui-checked': {
            '& svg': {},
          },
        },
      },
    },
    variants: [],
  };
};

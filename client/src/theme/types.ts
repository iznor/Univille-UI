import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  SxProps,
  ComponentNameToClassKey,
} from '@mui/material';
import { CSSObject } from '@mui/styled-engine';
import { Theme } from '@mui/material/styles/createTheme';
import { ThemeOptions } from '@mui/material/styles';

type IComponents = {
  [Name in keyof ComponentNameToClassKey]: {
    defaultProps?: ComponentsProps[Name];
    styleOverrides?: ComponentsOverrides<Theme>[Name];
    variants?: ComponentsVariants[Name];
  };
};
type sxFn = (styles: SxProps<Theme>) => CSSObject;

export type ComponentThemeFn = {
  [Name in keyof ComponentNameToClassKey]: (
    theme: Partial<ThemeOptions>
  ) => IComponents[Name];
};

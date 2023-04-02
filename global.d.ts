import { Theme } from '@mui/system';

declare global {
  type themeFunc = (theme: Theme) => string;
  type colorProp = themeFunc | string;
  type TypeNumColors = {
    [key: number]: string;
  };
}

export {};

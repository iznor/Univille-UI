import {createTheme, ThemeOptions, Components, Direction} from '@mui/material/styles';
import { components } from './components';
import { darkMode, lightMode } from './pallet';
import { typography, sizes, breakpoints } from './typography';
import { PaletteColor } from '@mui/material/styles/createPalette';
const spacingStyle = 8;

export const themeConfig = (isDarkMode = true,direction:Direction="ltr") => {
  return createTheme({
    direction,
    sizes: sizes,
    breakpoints: breakpoints,
    typography: typography,
    spacing: spacingStyle,
    palette: isDarkMode ? darkMode : lightMode,
    components: components({
      palette: isDarkMode ? darkMode : lightMode,
    } as Partial<ThemeOptions>),
    ...(isDarkMode ? darkMode : lightMode),
    button: undefined,
  });
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // mobile: true; // adds the `mobile` breakpoint
    // tablet: true;
    // laptop: true;
    // desktop: true;
  }
  interface ThemeOptions {
    sizes?: {
      inlineMargin?: string;
      sidenav?: string;
      guildNav?: string;
      sidenavCollapsed?: string;
    };
    button: Type_button;
  }

  interface Palette {
    app: appColorOptions;
    text: TypeText;
    alert: PaletteColorOptions;
    dark: Partial<TypeNumColors>;
    red: Partial<TypeNumColors>;
    orange: Partial<TypeNumColors>;
    purple: Partial<TypeNumColors>;
    green: Partial<TypeNumColors>;
    blue: Partial<TypeNumColors>;
    neutral: Partial<TypeNumColors>;
  }

  interface PaletteColor {
    [key: number]: string;
  }
  interface PaletteOptions {
    alert: PaletteColorOptions;
    red: Partial<TypeNumColors>;
    green: Partial<TypeNumColors>;
    neutral: Partial<TypeNumColors>;
    blue: Partial<TypeNumColors>;
    orange: Partial<TypeNumColors>;
    purple: Partial<TypeNumColors>;
    app: appColorOptions;
  }

  interface PaletteColorOptions extends Partial<TypeNumColors> {
    main: string;
  }
  interface appColorOptions extends Partial<TypeNumColors> {
    main: string;
    bg: string;
    bgInverse: string;
    cardBg: string;
    border: string;
    shadow: string;
  }

  interface TypeText {
    primary: string;
    secondary: string;
    inverse: string;
    default: string;
    disabled: string;
    dark: string;
    link: string;
    muted: string;
    linkPressed: string;
  }
}

// interface Type_app extends Partial<TypeNumColors> {
//   main: string;
//   bg: string;
//   dark: string;
//
// }
interface Type_button extends Partial<TypeNumColors> {
  bg: string;
  border: string;
  borderRegular: string;
  default: string;
  borderDefault: string;
  borderDefaultFocused: string;
  bgDisabled: string;
  borderDisabled: string;
}

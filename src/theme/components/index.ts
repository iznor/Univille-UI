import { MuiCheckboxOverride } from './MuiCheckboxOverride';
import { MuiButtonOverride } from './MuiButtonOverride';
import {
  experimental_sx as sxFn,
  ThemeOptions,
  Components,
} from '@mui/material/styles';
import { MuiCssBaselineOverride } from './MuiCssBaselineOverride';
import { MuiTextFieldOverride } from './MuiTextFieldOverride';
import { MuiMenuOverride } from './MuiMenuOverride';
import { MuiPaperOverride } from './MuiPaperOverride';
import { MuiAlertOverride } from './MuiAlertOverride';
import { MuiCardHeaderOverride } from './MuiCardHeaderOverride';
import { MuiCardOverride } from './MuiCardOverride';
import { MuiCardContentOverride } from './MuiCardContentOverride';
export const components = (theme: Partial<ThemeOptions>) =>
  ({
    MuiCheckbox: MuiCheckboxOverride(theme),
    MuiButton: MuiButtonOverride(theme),
    // MuiMenu: MuiMenuOverride(theme),
    // MuiPaper: MuiPaperOverride(theme),
    // MuiTextField: MuiTextFieldOverride(theme),
    // MuiAlert: MuiAlertOverride(theme),
    MuiCssBaseline: MuiCssBaselineOverride(theme),
    // MuiCard: MuiCardOverride(theme),
    // MuiCardHeader: MuiCardHeaderOverride(theme),
    // MuiCardContent: MuiCardContentOverride(theme),
  } as Components);

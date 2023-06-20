import { ComponentThemeFn } from '../types';

export const MuiFormControlOverride: ComponentThemeFn['MuiFormControl'] = (
    theme
) => {
    return {
        defaultProps: {},
        styleOverrides: {
            root: {
                "& .MuiFormLabel-root": {
                    color: theme.palette.text.muted,
                },
                "& .MuiInputBase-root": {
                    borderColor: theme.palette.app.border,
                }
            },
            focused: {},
        },
        variants: [],
    };
};

import {ComponentThemeFn} from '../types';

export const MuiCssBaselineOverride = (theme) => {
    return {
        styleOverrides: (themeParam) => ({
            html: {overflowY: 'hidden'},
            root: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            },
            body: {
                color: themeParam.palette.text[500],
                backgroundColor: themeParam.palette.app.bg,
                overflowX: 'hidden',
                letterSpacing: '0.03em',
                display: 'unset',
            },
            a: {
                color: 'inherit',
                textDecoration: 'none',
            },
            p: {
                color: themeParam.palette.text.primary,
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
            ".Mui-error":{
                color:`#FF5261!important`
                // color:themeParam.palette.text.error
            },
            // table
            "& .Mui-disabled": {
                "& .check-svg-path": {
                    fill: themeParam.palette.text.disabled
                }
            },
            //google maps
            '.gm-style .gm-style-iw-d::-webkit-scrollbar-track, .gm-style .gm-style-iw-d::-webkit-scrollbar-track-piece': {
                background: 'none !important',
                boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
            },
            '.gm-style-iw': {
                backgroundColor: `${themeParam.palette.app.bg} !important`,
            },
            '.gm-style-iw-d': {
                overflow: 'hidden !important',
                maxHeight:'300px !important',
            },
            'gm-style-iw gm-style-iw-c': {
                maxHeight:'300px !important',
            },
            '.gm-style .gm-style-iw-c': {
                padding: '0 !important',
                margin: '0 !important',


                '.gm-ui-hover-effect': {
                    padding: '0 !important',
                    margin: '0 !important',
                },
                '.gm-style-iw-d': {
                    padding: '0 !important',
                    margin: '0 !important',
                }
            }
        }),
    };
};

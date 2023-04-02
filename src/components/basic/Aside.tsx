import {Box, BoxProps} from "@mui/material";

export const Aside = (props: BoxProps<'aside'>) => {
    return (<Box component={'aside'} {...props}/>)
}

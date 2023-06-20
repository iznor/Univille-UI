import {Box, BoxProps} from "@mui/material";

export const Section = (props: BoxProps<'section'>) => {
    return (<Box component={'section'} {...props}/>)
}

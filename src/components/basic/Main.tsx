import {Box, BoxProps} from "@mui/material";

export const Main = (props: BoxProps<'main'>) => {
    return (<Box component={'main'} {...props}/>)
}

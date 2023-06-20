import {Box, BoxProps} from "@mui/material";

const Span = (props: BoxProps<'span'>) => {
    const {} = props;
    return (<Box component={'span'} {...props}/>)
};

export {Span};

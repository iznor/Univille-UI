import {Box, BoxProps,Tooltip, TooltipProps} from '@mui/material'
import {SxProps} from "@mui/system";
import {makeStyles, withStyles} from "tss-react/mui";
import React from "react";

export interface ICircle extends Partial<BoxProps>{
    size?:string|number,
    tooltip?: React.ReactNode;
    tooltipProps?: TooltipProps;
    sx?:SxProps,
    bg?:colorProp,
    borderColor?:colorProp,
    borderWidth?:string|number,
    className?: string;
}
export function Circle(props:ICircle){
    const {size=13,sx,children,tooltip = "", tooltipProps,bg,borderColor,borderWidth="1px",className,...rest} = props

    const {classes, cx} = useStyles({bg,borderColor,borderWidth});

    return (
        <Tooltip {...tooltipProps} title={tooltip}>
        <Box className={cx(classes.root,"simple-circle",className)}
             sx={[{borderRadius:"50%",overflow:"hidden",width:size,height:size},...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
            {children}
        </Box>
        </Tooltip>
    )
}


const useStyles = makeStyles<{ bg,borderColor,borderWidth}>()(
    (theme, {bg,borderColor,borderWidth}) => ({
            "root": {
                backgroundColor:typeof bg === 'function' ? bg(theme) : bg,
                borderColor:typeof borderColor === 'function' ? borderColor(theme) : borderColor,
                borderWidth:borderColor?borderWidth:'unset',
                borderStyle:borderColor?'solid':'none'
            },
        }
    )
);

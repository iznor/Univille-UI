import {ReactSVG, Props as svgProps} from 'react-svg'
import {CircularProgress, Box, BoxProps} from "@mui/material";
import {Span} from "./text";

interface ISVG extends Partial<BoxProps<'span'>> {
    name: string;
    size?: number;
    width?: number;
    height?: number;

}

const SVG = (props: ISVG) => {
    const {name,size=24,width,height,...rest} = props;
    return (
        <Span sx={{'& svg, & div': {width: width?width:size, height: height?height:size}}}  {...rest}>
            < ReactSVG src={`images/svg/${name}.svg`} loading={()=><CircularProgress />}/>
            </Span>
            );
        };

export {SVG};

import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

export function  Tooltip({children,...props} : TooltipProps) {
    return (
        <MuiTooltip
            {...props}
            enterDelay={600}
            enterNextDelay={400}
            children={children} />
    )
}

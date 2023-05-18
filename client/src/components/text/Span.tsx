import {Box,BoxProps} from '@mui/material'
import {FC} from 'react'

export function Span(props:BoxProps<"span">){
    return (
        <Box component="span" {...props}/>
    )
}

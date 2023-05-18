import {Typography,TypographyProps} from '@mui/material'
import React from 'react'


export function H5( props: TypographyProps<'h5'>){
    return (
        <Typography component="h5" variant="h5" {...props} />
    )
}

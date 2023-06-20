import {Typography,TypographyProps} from '@mui/material'
import {FC} from 'react'

export function H1(props: TypographyProps<'h1'>){
    return (
        <Typography {...props} component="h1" variant="h1" />
    )
}

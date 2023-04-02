import {Typography,TypographyProps} from '@mui/material'
import {FC} from 'react'

export function H2(props: TypographyProps<'h2'>){
    return (
        <Typography {...props} component="h2" variant="h2" />
    )
}

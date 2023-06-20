import {Typography,TypographyProps} from '@mui/material'
import {FC} from 'react'

export function H4(props: TypographyProps<'h4'>){
    return (
        <Typography component="h4" variant="h4" {...props}/>
    )
}

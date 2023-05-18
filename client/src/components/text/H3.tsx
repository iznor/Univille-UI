import {Typography,TypographyProps} from '@mui/material'
import {FC} from 'react'

export function H3(props: TypographyProps<'h3'>){
    return (
        <Typography component="h3" variant="h3" {...props}/>
    )
}

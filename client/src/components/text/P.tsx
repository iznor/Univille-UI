import {Typography,TypographyProps} from '@mui/material'
import {FC} from 'react'

export function P(props: TypographyProps<'p'>){
    return (
        <Typography component="p" variant="body1" {...props}/>
    )
}

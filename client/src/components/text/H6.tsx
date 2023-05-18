import {Typography,TypographyProps} from '@mui/material'
import {FC} from 'react'

export function H6(props: TypographyProps<'h6'>){
    return (
        <Typography component="h6" variant="h6" {...props}/>
    )
}

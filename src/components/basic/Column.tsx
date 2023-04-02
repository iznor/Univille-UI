import {Stack, StackProps} from '@mui/material'

export function Column({children,className="",...props}:StackProps){
    return (
        <Stack direction={"column"} {...props} className={`desktop-column ${className}`}>
            {children}
        </Stack>
    )
}

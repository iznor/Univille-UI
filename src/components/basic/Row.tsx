import {Stack,StackProps} from '@mui/material'
import {forwardRef} from 'react'
export const Row=forwardRef(({children,className="",...props}:StackProps,ref)=>{
    return (
        <Stack ref={ref} direction={"row"} className={`desktop-row ${className}`} {...props}>
            {children}
        </Stack>
    )
})

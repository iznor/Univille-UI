import { Stack, StackProps } from '@mui/material';
import { forwardRef } from 'react';

export function Row({ children, className = '', ...props }: StackProps) {
  return (
    <Stack direction={'row'} {...props}>
      {children}
    </Stack>
  );
}

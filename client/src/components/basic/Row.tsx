import { Stack, StackProps } from '@mui/material';
import { forwardRef } from 'react';

export function Row({ children, ...props }: StackProps) {
  const { className='' } = props;
  return (
    <Stack direction={'row'} className={`row ${className}`} {...props}>
      {children}
    </Stack>
  );
}

import { Stack, StackProps } from '@mui/material';
import React from 'react';

export function Column(props: StackProps) {
  return (
    <Stack direction={'column'} {...props}>
      {props.children}
    </Stack>
  );
}

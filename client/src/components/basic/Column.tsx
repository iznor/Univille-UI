import { Stack, StackProps } from '@mui/material';
import React from 'react';

export function Column(props: StackProps) {
  const {className="",...rest} = props;
  return (
    <Stack direction={'column'} className={`column ${className}`} {...rest}>
      {props.children}
    </Stack>
  );
}

import { Box, BoxProps, Stack, StackProps } from '@mui/material';
import { Column } from './Column';
import React from 'react';

const Form = (props: StackProps<'form'>) => {
  return (
    <Stack
      component="form"
      direction={'column'}
      sx={{ padding: '15px' }}
      {...props}
    >
      {props.children}
    </Stack>
  );
};

export { Form };

import { Column } from '../../../components';
import React from 'react';
import { ContainerProps, Container, StackProps } from '@mui/material';

interface IPageWrapper {
  children?: React.ReactNode;
  containerProps?: ContainerProps;
  ColumnProps?: StackProps;
}

const PageWrapper = (props: IPageWrapper) => {
  const { children, ColumnProps, containerProps } = props;
  return (
    <Container
      {...containerProps}
      maxWidth="xl"
      sx={{
        // border: '2px solid green',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {children}
    </Container>
  );
};

export { PageWrapper };

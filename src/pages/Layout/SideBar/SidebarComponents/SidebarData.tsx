import React from 'react';
import { P } from '../../../../components';
import { Container } from '@mui/system';

interface ISidebarData {}

const SidebarData = (props: ISidebarData) => {
  const {} = props;
  return (
    <Container
      style={{
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 25,
      }}
    >
      <P>User info</P>
    </Container>
  );
};

export { SidebarData };

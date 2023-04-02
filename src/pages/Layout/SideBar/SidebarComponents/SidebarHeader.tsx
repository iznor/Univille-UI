import React from 'react';
import { Toolbar } from '@mui/material';
import { ImageLink } from '../../../../components';
import { makeStyles } from 'tss-react/mui';

interface ISidebarHeader {}

const SidebarHeader = (props: ISidebarHeader) => {
  const {} = props;
  const { classes, cx } = useStyle();
  return (
    <Toolbar>
      <ImageLink
        to="/"
        className={cx(classes.logo)}
        src={require('../../../../assets/images/univille-logo.png')}
      />
    </Toolbar>
  );
};

const useStyle = makeStyles()((theme) => ({
  logo: {
    height: 150,
    width: 150,
    marginLeft: '50px',
  },
}));

export { SidebarHeader };

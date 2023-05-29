import React from 'react';
import {SidebarData, SidebarFooter, SidebarHeader, SidebarLinks} from './SidebarComponents';
import { Divider,Column } from '../.././../components';
import { makeStyles } from 'tss-react/mui';

interface ISidebarContent {
    onToggleSidebar?: () => void;
}

const SidebarContent = (props: ISidebarContent) => {
  const {onToggleSidebar} = props;
    const {classes, cx} = useStyle()
  return (
    <Column className={classes.root}>
        <Column >
      <SidebarHeader onToggleSidebar={onToggleSidebar} />
      <Divider />
      <SidebarData />
      <Divider />
      <SidebarLinks />
        </Column>
        <Column >
      <Divider />
      <SidebarFooter />
        </Column>
    </Column>
  );
};

const useStyle = makeStyles()((theme) => ({
    root: {
        justifyContent:'space-between',
        height:"100%",
    },
}));


export { SidebarContent };

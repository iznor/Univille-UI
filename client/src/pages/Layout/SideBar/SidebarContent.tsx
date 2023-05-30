import React from 'react';
import {SidebarData, SidebarFooter, SidebarHeader, SidebarLinks} from './SidebarComponents';
import { Divider,Column } from '../.././../components';
import { makeStyles } from 'tss-react/mui';
import {useUi} from "../../../store";

interface ISidebarContent {
}

const SidebarContent = (props: ISidebarContent) => {
  const {} = props;
    const {uiState, uiActions} = useUi();
    const {classes, cx} = useStyle({drawerWidth:uiState.drawer.width})

  return (
    <>
        <Column sx={{height:"95vh"}} >
      <SidebarHeader/>
      <Divider />
      <SidebarData />
      <Divider />
      <SidebarLinks />
        </Column>
        <Column >
      <Divider />
      <SidebarFooter />
        </Column>
    </>
  );
};

const useStyle = makeStyles<{drawerWidth}>()((theme,{drawerWidth}) => ({
    root: {
        width: `${drawerWidth}px`,
        justifyContent:'space-between',
        height:"100%",
    },
}));


export { SidebarContent };

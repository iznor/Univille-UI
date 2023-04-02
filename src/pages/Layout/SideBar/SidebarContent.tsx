import React from 'react';
import { SidebarData, SidebarHeader, SidebarLinks } from './SidebarComponents';
import { Divider } from 'components';

interface ISidebarContent {}

const SidebarContent = (props: ISidebarContent) => {
  const {} = props;
  return (
    <>
      <SidebarHeader />
      <Divider />
      <SidebarData />
      <Divider />
      <SidebarLinks />
    </>
  );
};

export { SidebarContent };

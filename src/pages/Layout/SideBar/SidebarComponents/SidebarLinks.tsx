import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SidebarLinkItem } from './SidebarLinkItem';
import { navLinks } from 'routes';
import { Divider } from 'components';
import { MeetingRoom } from '@mui/icons-material';

interface ISidebarLinks {}

const SidebarLinks = (props: ISidebarLinks) => {
  const {} = props;
  return (
    <List>
      {navLinks.map((link) => (
        <SidebarLinkItem
          key={link.path}
          path={link.path}
          title={link.title}
          icon={link.icon}
        />
      ))}
      <Divider />
      <ListItem button onClick={() => {}}>
        <ListItemIcon>
          <MeetingRoom />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
};

export { SidebarLinks };

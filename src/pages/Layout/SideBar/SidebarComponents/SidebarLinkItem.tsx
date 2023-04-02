import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
interface ISidebarLinkItem {
  path: string;
  title: string;
  icon: React.ReactNode;
}

const SidebarLinkItem = (props: ISidebarLinkItem) => {
  const { path, title, icon } = props;
  const resolved = useResolvedPath(path);
  const match = useMatch({ path: resolved.pathname, end: true });
  const { classes, cx } = useStyle({ selected: match });
  return (
    <Link className={cx(classes.root)} to={path}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
};

const useStyle = makeStyles<{ selected }>()((theme, { selected }) => ({
  root: {
    textDecoration: 'none',
    '& .MuiSvgIcon-root': {
      color: selected ? theme.palette.primary.main : theme.palette.text.dark,
    },
    '& .MuiListItemText-root': {
      color: selected ? theme.palette.primary.main : theme.palette.text.dark,
    },
    '&:hover': {
      '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
      '& .MuiListItemText-root': { color: theme.palette.primary.main },
    },
  },
}));

export { SidebarLinkItem };

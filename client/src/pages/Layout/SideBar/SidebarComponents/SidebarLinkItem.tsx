import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import {useUi} from "../../../../store";
interface ISidebarLinkItem {
  path: string;
  title: string;
  icon: React.ReactNode;
}

const SidebarLinkItem = (props: ISidebarLinkItem) => {
  const { path, title, icon } = props;
  const resolved = useResolvedPath(path);
  const match = useMatch({ path: resolved.pathname, end: true });
  const {uiState,uiActions} = useUi();
  const { classes, cx } = useStyle({ selected: match,rtl:uiState.rtl });
  return (
    <Link className={cx(classes.root)} to={path}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
};

const useStyle = makeStyles<{ selected,rtl }>()((theme, { selected,rtl }) => ({
  root: {
    "& .MuiListItemText-primary": {
      textAlign:"justify"
    },
    textDecoration: 'none',
    '& .MuiButtonBase-root': {
      borderRight: selected&&(!rtl)? `4px solid ${theme.palette.primary.main}` : 'none',
      borderLeft: selected&&rtl? `4px solid ${theme.palette.primary.main}` : 'none',
    },
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

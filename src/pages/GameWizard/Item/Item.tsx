import { Box, Button, Paper } from '@mui/material';
import { H2, P } from '../../../components';
import React from 'react';

export const Item = (props) => {
  return (
    <Box className="location-selector-wrapper">
      <Paper className="paper">
        <img src={props.item.objectPhotoUrl} className="item-photo-box" />
        <Box className="item-description-box">
          <H2>{props.item.name}</H2>
          <P>{props.item.description}</P>
          <Button className="CheckButton">Add this location</Button>
        </Box>
        <img src={props.item.mapPhotoUrl} className="item-photo-box" />
      </Paper>
    </Box>
  );
};

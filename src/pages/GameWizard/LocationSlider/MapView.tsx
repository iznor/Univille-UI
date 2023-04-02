import React from 'react';
import { P } from '../../../components';
import { Box } from '@mui/material';
import './MapView.scss';

interface IMapView {}

export const MapView = (props: IMapView) => {
  const {} = props;
  return (
    <Box className="map-wrapper">
      <P>location1</P>
      <P>location2</P>
      <P>location3</P>
    </Box>
  );
};

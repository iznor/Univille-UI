import React from 'react';
import { H2, P } from '../../../components';
import { Box, Paper, Button } from '@mui/material';
import './LocationSelector.scss';
import Carousel from 'react-material-ui-carousel';
import { Item } from '../Item/Item';
import { useLocationItems } from './hooks/useLocationItems';

interface IMapView {}

export const LocationSelector = (props: IMapView) => {
  const {} = props;
  const { items } = useLocationItems();

  return (
    <Carousel
      autoPlay={false}
      indicators={true}
      swipe={true}
      cycleNavigation={true}
      navButtonsAlwaysVisible={true}
      fullHeightHover={true}
      animation={'slide'}
      duration={500}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

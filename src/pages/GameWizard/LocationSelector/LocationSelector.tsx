import React from 'react';
import { H2, P } from '../../../components';
import { Box, Paper, Button } from '@mui/material';
import './LocationSelector.scss';
import Carousel from 'react-material-ui-carousel';
import { Item } from '../Item/Item';
import { LocationItem } from '../consts';

interface ILocationSelector {
  itemsList: LocationItem[];
  selectItem: (item: LocationItem) => void;
  removeItem: (item: LocationItem) => void;
}

export const LocationSelector = (props: ILocationSelector) => {
  const { itemsList, selectItem, removeItem } = props;

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
      {itemsList.map((item, i) => (
        <Item
          key={i}
          item={item}
          selectItem={selectItem}
          removeItem={removeItem}
        />
      ))}
    </Carousel>
  );
};

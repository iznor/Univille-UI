import React from 'react';
import './LocationSelector.scss';
import Carousel from 'react-material-ui-carousel';
import { Item } from '../Item';
import { LocationItem } from '../consts';
import { H3 } from '../../../components';

interface ILocationSelector {
  itemsList: LocationItem[];
  selectedItems: LocationItem[];
  selectItem: (item: LocationItem) => void;
  removeItem: (item: LocationItem) => void;
}

export const LocationSelector = (props: ILocationSelector) => {
  const { itemsList, selectedItems, selectItem, removeItem } = props;

  return (
    <>
      <H3 sx={{ margin: '10px' }}>Locations Selector</H3>
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
            selectedItems={selectedItems}
          />
        ))}
      </Carousel>
    </>
  );
};

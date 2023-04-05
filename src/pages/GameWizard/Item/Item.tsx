import { Box, Button, Paper } from '@mui/material';
import { H2, P } from '../../../components';
import React, { useEffect, useState } from 'react';
import { LocationItem } from '../consts';
type ItemProps = {
  item: LocationItem;
  selectItem: (item: LocationItem) => void;
  removeItem: (item: LocationItem) => void;
};
export const Item = (props: ItemProps) => {
  const { item, selectItem, removeItem } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Add this location');
  useEffect(() => {}, [isSelected]);
  const handleButtonClick = () => {
    isSelected ? removeItem(item) : selectItem(item);
    setIsSelected(!isSelected);
  };
  return (
    <Box className="location-selector-wrapper">
      <Paper className="paper">
        <img src={item.objectPhotoUrl} className="item-photo-box" />
        <Box className="item-description-box">
          <H2>{item.name}</H2>
          <P>{item.description}</P>
          <Button className="CheckButton" onClick={handleButtonClick}>
            {isSelected ? 'Remove from list' : 'Add this location'}
          </Button>
        </Box>
        <img src={item.mapPhotoUrl} className="item-photo-box" />
      </Paper>
    </Box>
  );
};

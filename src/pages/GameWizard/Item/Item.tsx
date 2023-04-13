import { Box, Button, Paper } from '@mui/material';
import { H2, P } from '../../../components';
import React, { useEffect, useState } from 'react';
import { LocationItem } from '../consts';
import { DeleteItemWithDialog } from '../DeleteItemWithDialog/DeleteItemWithDialog';
type ItemProps = {
  item: LocationItem;
  selectedItems: LocationItem[];
  selectItem: (item: LocationItem) => void;
  removeItem: (item: LocationItem) => void;
};
export const Item = (props: ItemProps) => {
  const { item, selectedItems, selectItem, removeItem } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);
  useEffect(() => {
    const isInSelectedItems = selectedItems.some(
      (selectedItem) => item.unityObjectTag === selectedItem.unityObjectTag
    );
    if (isSelected && !isInSelectedItems) {
      setIsSelected(!isSelected);
    }
  }, [isSelected, selectedItems]);
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
          <Button
            variant={'outlined'}
            className={isSelected ? 'button-remove' : ''}
            onClick={handleButtonClick}
          >
            {isSelected ? 'Remove' : 'Add Location'}
          </Button>
        </Box>
        <img src={item.mapPhotoUrl} className="item-photo-box" />
      </Paper>
    </Box>
  );
};

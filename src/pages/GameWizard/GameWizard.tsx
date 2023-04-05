import React, { useEffect, useState } from 'react';
import { P } from '../../components';
import { Box } from '@mui/material';
import './GameWizard.scss';
import { LocationSelector } from './LocationSelector';
import { useLocationItems } from './hooks/useLocationItems';
import { LocationItem } from './consts';

interface IGameWizard {}

const GameWizard = (props: IGameWizard) => {
  // const {} = props;
  const { itemsList } = useLocationItems();
  const [selectedItems, setSelectedItems] = useState<LocationItem[]>([]);
  useEffect(() => {}, [selectedItems]);
  const handleSelect = (item: LocationItem) => {
    !selectedItems.some(
      (selectedItem) => selectedItem.unityObjectTag === item.unityObjectTag
    )
      ? setSelectedItems([...selectedItems, item])
      : console.log('todo: already in the list message');
  };

  const handleRemove = (item: LocationItem) => {
    const newSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.unityObjectTag !== item.unityObjectTag
    );
    selectedItems.some(
      (selectedItem) => selectedItem.unityObjectTag === item.unityObjectTag
    )
      ? setSelectedItems(newSelectedItems)
      : console.log('todo: error message - cant remove item');
  };
  return (
    <Box className="game-wizard-wrapper">
      <LocationSelector
        itemsList={itemsList}
        selectItem={(item: LocationItem) => handleSelect(item)}
        removeItem={(item: LocationItem) => handleRemove(item)}
      />
      <P>
        Selected Locations:{' '}
        {selectedItems.map((item) => (
          <p>{item.name}</p>
        ))}
      </P>
    </Box>
  );
};

export { GameWizard };

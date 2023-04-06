import { LocationItem } from '../consts';
import { useEffect, useState } from 'react';

export const useLocationItems = () => {
  // todo - api GET request to receive:
  const itemsList: LocationItem[] = [
    {
      name: 'Location #1',
      unityObjectTag: '0_StreetLight',
      description: 'Decription of location 1',
      objectPhotoUrl: 'https://random.imagecdn.app/450/300',
      mapPhotoUrl: 'https://random.imagecdn.app/450/300',
    },
    {
      name: 'Location #2',
      unityObjectTag: '0_Bus',
      description: 'Decription of location 2',
      objectPhotoUrl: 'https://random.imagecdn.app/450/300',
      mapPhotoUrl: 'https://random.imagecdn.app/450/300',
    },
    {
      name: 'Location #3',
      unityObjectTag: '1_Tower',
      description: 'Decription of location 3',
      objectPhotoUrl: 'https://random.imagecdn.app/450/300',
      mapPhotoUrl: 'https://random.imagecdn.app/450/300',
    },
  ];

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

  return { itemsList, selectedItems, handleSelect, handleRemove };
};

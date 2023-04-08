import { LocationItem } from '../consts';
import { useEffect, useState } from 'react';

export const useLocationItems = () => {
  // todo - api GET request to receive:
  const itemsList: LocationItem[] = [
    {
      unityObjectTag: '0_StreetLight',
      name: 'Safari Ramat Gan',
      description:
        'The Zoological Center in the city of Ramat Gan, is the largest collection of wildlife in human care in the Middle East.',
      objectPhotoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Safari_park.jpg',
      mapPhotoUrl:
        'https://docs.unity-ar-gps-location.com/assets/img/02.9e27a4eb.png',
      hint: 'sss',
    },
    {
      unityObjectTag: '0_Bus',
      name: 'Location #2',
      description: 'Decription of location 2',
      objectPhotoUrl: 'https://random.imagecdn.app/450/300',
      mapPhotoUrl: 'https://random.imagecdn.app/450/300',
    },
    {
      unityObjectTag: '1_Tower',
      name: 'Location #3',
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

import { LocationItem } from '../consts';

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

  return { itemsList };
};

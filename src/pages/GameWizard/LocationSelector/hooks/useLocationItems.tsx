import { LocationItem } from '../../consts';

export const useLocationItems = () => {
  // todo - api GET request to receive:
  const items: LocationItem[] = [
    {
      name: 'Random Name #1',
      unityObjectTag: '0_StreetLight',
      description: 'Probably the most random!',
      objectPhotoUrl: 'https://random.imagecdn.app/450/300',
      mapPhotoUrl: 'https://random.imagecdn.app/450/300',
    },
    {
      name: 'Random Name #2',
      unityObjectTag: '0_Bus',
      description: 'Hello World!',
      objectPhotoUrl: 'https://random.imagecdn.app/450/300',
      mapPhotoUrl: 'https://random.imagecdn.app/450/300',
    },
    {
      name: 'Random Name #2',
      unityObjectTag: '1_Tower',
      description: 'Hello World!',
      objectPhotoUrl: 'https://random.imagecdn.app/450/300',
      mapPhotoUrl: 'https://random.imagecdn.app/450/300',
    },
  ];

  return { items };
};

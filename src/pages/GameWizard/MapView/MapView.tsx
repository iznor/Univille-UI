import React from 'react';
import { H2, P } from '../../../components';
import { Box, Paper, Button } from '@mui/material';
import './MapView.scss';
import Carousel from 'react-material-ui-carousel';
interface IMapView {}

type ItemProps = {
  name: string;
  description: string;
  objectPhotoUrl: string;
  mapPhotoUrl: string;
};
export const MapView = (props: IMapView) => {
  const {} = props;

  let items: ItemProps[] = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      objectPhotoUrl: 'https://random.imagecdn.app/1200/350',
      mapPhotoUrl: 'https://random.imagecdn.app/1201/350',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      objectPhotoUrl: 'https://random.imagecdn.app/1201/351',
      mapPhotoUrl: 'https://random.imagecdn.app/1202/310',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      objectPhotoUrl: 'https://random.imagecdn.app/1201/360',
      mapPhotoUrl: 'https://random.imagecdn.app/1201/361',
    },
  ];

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

function Item(props) {
  return (
    <Paper className="paper">
      <img src={props.item.objectPhotoUrl} className="item-photo-box" />
      <Box className="item-description-box">
        <H2>{props.item.name}</H2>
        <P>{props.item.description}</P>
        <Button className="CheckButton">Add this location</Button>
      </Box>
      <img src={props.item.mapPhotoUrl} className="item-photo-box" />
    </Paper>
  );
}

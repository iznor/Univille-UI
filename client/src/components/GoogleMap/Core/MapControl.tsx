import React, {useEffect, useState} from 'react';
import { createPortal } from 'react-dom';
import { useGoogleMap } from '@react-google-maps/api';
import {MapControlPosition} from "./types";
import _ from 'lodash';
interface IMapControl{
position: number;
children: React.ReactNode;
id: string;
}

const MapControl = (props:IMapControl) => {
 const { position, children,id } = props;

 const map = useGoogleMap();

 // const { mapRef } = useMapsContext();
 const [container] = useState(document.createElement('div'));

 useEffect(() => {
  container.id = id;
  return () => {
   if (map) {
    const controls = map.controls[position];
    const index = _.findIndex(controls, ['id', id]);
    if (index !== -1) {
     controls.removeAt(index);
    }
   }
  };
 }, []);

 useEffect(() => {
  if (map) {
   console.log(position)
   const controlsContainer = map.controls[position];
   controlsContainer.push(container);
  }
 }, [map]);

 useEffect(() => {
  container.style.zIndex = '0';
 }, []);

 return createPortal(children, container,container.id);
};

export {MapControl};

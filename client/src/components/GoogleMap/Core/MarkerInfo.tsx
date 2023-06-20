import React from "react";
import {InfoWindow} from "@react-google-maps/api";

interface IMarkerInfo{
    active?: boolean;
    position: {
        x: number;
        y: number;
    },
    onCloseClick: () => void;
    onOkClick?: () => void;
    id: number;
    content?:React.ReactNode;
}

const MarkerInfo = (props:IMarkerInfo) => {
const {
    active= false,
    position = {x: 0, y: 0},
    onOkClick = () => {},
    onCloseClick,
    content,
    id
} = props;
 if(active)return (
  <InfoWindow
      position={{lat: position.x, lng: position.y}}
      onCloseClick={onCloseClick}
  >
      {content}
  </InfoWindow>
 );
};

export {MarkerInfo};

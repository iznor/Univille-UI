import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import React from "react";
interface IImg extends  Partial<React.ImgHTMLAttributes<HTMLImageElement>> {
 src?:string;
 img?:string;
}

const Img = (props:IImg) => {
const {src,img,...rest} = props;
 return (
  <LazyLoadImage effect="blur" src={img?`images/${img}`:src} {...rest} />
 );
};

export {Img};

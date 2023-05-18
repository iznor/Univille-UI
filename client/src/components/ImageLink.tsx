import { Link } from 'react-router-dom';
import React from 'react';
import { Box } from '@mui/material';

interface IImageLink {
  to: string;
  src: string;
  className?: string;
}

const ImageLink = (props: IImageLink) => {
  const { to, src, className } = props;
  return (
    <Link to={to}>
      <Box
        className={className}
        component="img"
        alt="comment on everything"
        src={src}
      />
    </Link>
  );
};

export { ImageLink };

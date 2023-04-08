import React from 'react';
import { DeleteTwoTone } from '@mui/icons-material';

interface DeleteButtonProps {
  onClick?: () => void;
  color?: string;
  cursor?: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  onClick,
  cursor = 'pointer',
}) => {
  return <DeleteTwoTone onClick={onClick} cursor={cursor} />;
};

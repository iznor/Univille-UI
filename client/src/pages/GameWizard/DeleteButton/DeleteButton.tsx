import React from 'react';
import { DeleteTwoTone } from '@mui/icons-material';
import Button from '@mui/material/Button';

interface DeleteButtonProps {
  onClick?: () => void;
  color?: string;
  cursor?: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  onClick,
  cursor = 'pointer',
}) => {
  return (
    <Button variant={'outlined'}>
      <DeleteTwoTone onClick={onClick} cursor={cursor} />
    </Button>
  );
};

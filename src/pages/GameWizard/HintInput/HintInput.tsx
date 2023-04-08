import React, { useState } from 'react';
import { Input } from '@mui/material';
import { LocationItem } from '../consts';
interface HintInputProps {
  item: LocationItem;
  hint: string;
  event?: React.ChangeEvent<HTMLInputElement>;
}
export const HintInput = (props: HintInputProps) => {
  const [hintValue, setHintValue] = useState(props.hint || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHintValue(event.target.value);
    props.item.hint = event.target.value;
  };

  return (
    <Input value={hintValue} onChange={handleChange} sx={{ width: '100%' }} />
  );
};

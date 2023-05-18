import React, { useState } from 'react';
import { Box, Input } from '@mui/material';
import { LocationItem } from '../consts';
import { P } from '../../../components';
import { themeConfig } from '../../../theme';

interface HintInputProps {
  item: LocationItem;
  hint: string;
  event?: React.ChangeEvent<HTMLInputElement>;
}

export const HintInput = (props: HintInputProps) => {
  const [hintValue, setHintValue] = useState(props.hint || '');
  const [isHintTouched, setIsHintTouched] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHintValue(event.target.value);
    props.item.hint = event.target.value;
  };

  const handleBlur = () => {
    setIsHintTouched(true);
  };

  const isHintEmpty = hintValue.trim() === '';
  const shouldShowWarning = isHintTouched && isHintEmpty;

  return (
    <Box sx={{ display: 'flex' }}>
      {shouldShowWarning && (
        <P style={{ color: 'red', marginRight: '5px' }}>*</P>
      )}
      <Input
        required
        value={hintValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={
          (shouldShowWarning && 'This field is required') ||
          'Your hint goes here...'
        }
        sx={{ width: '100%' }}
      />
    </Box>
  );
};

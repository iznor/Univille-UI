//wrapping the select of material ui in a component
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import React, { ReactNode } from 'react';

interface ISelectInput extends Partial<SelectProps> {
  options: { label: string; value: string; id: string }[];
  errorMsg?: string;
  validators?: string[];
  onValueChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    validators?: string[]
  ) => void;
}

const SelectInput = (props: ISelectInput) => {
  const {
    options,
    errorMsg = '',
    validators = [],
    onValueChange,
    ...rest
  } = props;

  const handleChange = (event) => {
    onValueChange(event, validators);
  };

  return (
    <FormControl>
      <Select onChange={handleChange} error={!!errorMsg} {...rest}>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { SelectInput };

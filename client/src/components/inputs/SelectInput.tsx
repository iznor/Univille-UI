//wrapping the select of material ui in a component
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import React, { ReactNode } from 'react';


interface ISelectInput extends Partial<SelectProps> {
  options: { label: string; value: string; id: string }[];
  errorMsg?: string;
  validators?: string[];
  value?: string;
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
    label = '',
    onValueChange,
    value='',
    ...rest
  } = props;

  const handleChange = (event) => {
    console.log('event', event)
    onValueChange(event, validators);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-multiple-chip-label" sx={{backgroundColor: theme => theme.palette.app.cardBg
      }}>{label}</InputLabel>
      <Select onChange={handleChange} error={!!errorMsg} value={value} MenuProps={MenuProps} {...rest}>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export { SelectInput };

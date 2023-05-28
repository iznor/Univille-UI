import { FormControl, TextField, TextFieldProps } from '@mui/material';
import { StandardTextFieldProps } from '@mui/material/TextField/TextField';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
interface ITextInput extends Partial<StandardTextFieldProps> {
  icon?: JSX.Element;
  errorMsg?: string;
  validators?: string[];
  onValueChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    validators?: string[]
  ) => void;
}

export const TextInput = (props: ITextInput) => {
  const {
    icon,
    errorMsg = '',
    validators = [],
      className='',
    onValueChange,
    ...rest
  } = props;
  const { classes, cx } = useStyles({ icon });

  const handleChange = (event) => {
    onValueChange(event, validators);
  };
  return (
    <FormControl className={cx(classes.root)}>
      {icon}
      <TextField
        className={cx(classes.input, classes.icon,className)}
        InputLabelProps={{ shrink: true }}
        onChange={handleChange}
        onBlur={handleChange}
        error={!!errorMsg}
        helperText={errorMsg}
        {...rest}
      />
    </FormControl>
  );
};

const useStyles = makeStyles<{ icon }>()(
  (theme, { icon }) =>
    ({
      root: {
        position: 'relative',
      },
      icon: {
        '& svg': {
          position: 'absolute',
          fontSize: 30,
          top: 12,
          left: 10,
          zIndex: 2,
          color: '#AFAFAF',
        },
      },
      input: {
        // '&  label': {
        //   transform: 'translate(0, 1.5px) scale(0.9)',
        //   fontWeight: 700,
        // },
        // '& .MuiInputBase-input': {
        //   position: 'relative',
        //   border: '1px solid #AFAFAF',
        //   width: '100%',
        // },
        // '& .MuiOutlinedInput-notchedOutline': {
        //   border: 'none',
        // },
      },
    } as const)
);

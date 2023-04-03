import { FormControl, TextField, TextFieldProps } from '@mui/material'
import { StandardTextFieldProps } from '@mui/material/TextField/TextField'

interface ITextInput extends Partial<StandardTextFieldProps>{

}

const TextInput = (props:ITextInput) => {
const {} = props;
 return (
  <FormControl>
   <TextField

   />

  </FormControl>
 );
};

export {TextInput};

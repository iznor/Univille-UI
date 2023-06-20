import {Checkbox as MuiCheckbox, CheckboxProps} from "@mui/material";

interface ICheckbox extends Partial<CheckboxProps>{
checked?: boolean;
}

const Checkbox = (props:ICheckbox) => {
const {checked} = props;
 return (
     <MuiCheckbox
         checked={checked}
     />
 );
};

export {Checkbox};

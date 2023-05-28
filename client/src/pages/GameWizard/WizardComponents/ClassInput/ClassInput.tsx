import React, {useEffect, useState} from "react";
import {Autocomplete as MuiAutocomplete, Button, createFilterOptions, TextField,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";
import {useData} from "store";


const filter = createFilterOptions<ClassOptionType>();
interface IClassInput{
    onSelected?: (value: Partial<ClassOptionType> | null) => void;
    value:Partial<ClassOptionType> | null;

}

const ClassInput = (props:IClassInput) => {
const {onSelected,value} = props;
    const {dataActions, dataState} = useData();
    // const [value, setValue] = useState<ClassOptionType | null>(null);
    const [open, toggleOpen] = useState(false);

    // useEffect(() => {
    //     console.log({val})
    //     setValue(val);
    // }, [val]);

    const handleClose = () => {
        setDialogValue({name: ''});
        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = useState({name: ''});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // setValue({
        //     name: dialogValue.name,
        // });
        dataActions.createClass(dialogValue.name);
        onSelected({name: dialogValue.name});
        handleClose();
    };
 return (
     <React.Fragment>
         <MuiAutocomplete
             size={"small"}
             value={value || {name: ''}}
             onChange={(event, newValue) => {
                 if (typeof newValue === 'string') {
                     // timeout to avoid instant validation of the dialog's form.
                     setTimeout(() => {
                         toggleOpen(true);
                         setDialogValue({
                             name: newValue,
                         });
                     });
                 } else if (newValue && newValue.inputValue) {

                     toggleOpen(true);
                     setDialogValue({
                         name: newValue.inputValue,
                     });
                 } else {
                     // setValue(newValue);
                     onSelected(newValue);
                 }
             }}
             filterOptions={(options, params) => {
                 const filtered = filter(options, params);

                 if (params.inputValue !== '') {
                     filtered.push({
                         inputValue: params.inputValue,
                         name: `Add "${params.inputValue}"`,
                     });
                 }

                 return filtered;
             }}
             id="free-solo-dialog-demo"
             options={dataState.classes}
             getOptionLabel={(option) => {
                 // e.g value selected with enter, right from the input
                 if (typeof option === 'string') {
                     return option;
                 }
                 if (option.inputValue) {
                     return option.inputValue;
                 }
                 return option.name;
             }}
             selectOnFocus
             clearOnBlur
             handleHomeEndKeys
             renderOption={(props, option) => <li {...props}>{option.name}</li>}
             sx={{ width: 130 }}
             freeSolo
             renderInput={(params) => <TextField {...params} label="Choose Class" />}
         />
         <Dialog open={open} onClose={handleClose}>
             <form onSubmit={handleSubmit}>
                 <DialogTitle>Add new class</DialogTitle>
                 <DialogContent>
                     <TextField
                         autoFocus
                         margin="dense"
                         id="name"
                         value={dialogValue.name}
                         onChange={(event) =>
                             setDialogValue({
                                 ...dialogValue,
                                 name: event.target.value,
                             })
                         }
                         label="Class Name"
                         type="text"
                     />
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={handleClose}>Cancel</Button>
                     <Button type="submit">Add</Button>
                 </DialogActions>
             </form>
         </Dialog>
     </React.Fragment>
 );
};

export {ClassInput};

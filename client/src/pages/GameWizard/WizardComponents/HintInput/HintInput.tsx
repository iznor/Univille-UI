import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Box} from "@mui/material";
import {Column, Img, TextInput} from "../../../../components";
import {useForm} from "../../../../hooks";

interface IHintInput{
    value?:Partial<IHint>,
onValueChange:(value:Partial<IHint>)=>void

}

const HintInput = (props:IHintInput) => {
const {value,onValueChange} = props;
const {classes, cx} = useStyle();
    const handleFormChange = ({ target: { name, value:val } }) => {
        onValueChange({...value,[name]:val})
    }
 return (
  <Column className={cx(classes.root)}>
      <TextInput
          name="title"
          id="hint-title"
          placeholder="Hint Title.."
          onValueChange={handleFormChange}
          value={value?.title??""}
          errorMsg={''}
          validators={['required']}
          color={"secondary"}
          variant="standard"
          fullWidth
      />
      <TextInput
          multiline
          rows={4}
          name="hint"
          id="hint-text"
          placeholder="Hint Text.."
          onValueChange={handleFormChange}
          value={value?.hint ?? ''}
          errorMsg={ ''}
          validators={['required']}
          color={"primary"}
          variant="standard"
          fullWidth
      />
  </Column>
 );
};

export {HintInput};

const useStyle = makeStyles()((theme) => ({
 root: {
     minWidth:"400px",
     "& .MuiTextField-root":{
         fontSize:"0.8rem",
     }

 },

}));

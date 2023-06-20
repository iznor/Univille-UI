import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Box} from "@mui/material";
import {TextInput} from "../../../../components";

interface IDescriptionInput {
    value?: Partial<IHint>,
    onValueChange: (value: string) => void
}

const DescriptionInput = (props: IDescriptionInput) => {
    const {onValueChange, value} = props;
    const {classes, cx} = useStyle();

    const handleFormChange = ({target: {name, value: val}}) => {
        onValueChange(val)
    }
    return (
        <TextInput
            className={cx(classes.root)}
            name="description"
            id="hint-description"
            placeholder="Descripttion..."
            multiline
            rows={4}
            onValueChange={handleFormChange}
            value={value}
            errorMsg={''}
            validators={['required']}
            color={"secondary"}
            variant="standard"
            fullWidth
        />
    );
};

export {DescriptionInput};

const useStyle = makeStyles()((theme) => ({
    root: {
        minWidth: "300px"

    },

}));

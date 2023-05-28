import {ListItemButton, ListItemButtonProps, ListItemText, Checkbox, CheckboxProps} from "@mui/material";
import React from "react";

export interface IListItem {
    selected?: boolean;
    active?: boolean;
    onItemSelect?: (id:string,state:boolean) => void;
    onItemClick?: (id:string) => void;
    name?: string;
    Subtitle?: React.ReactNode;
    id: string;
    checkBoxProps?: Partial<CheckboxProps>;
    [key: string]: any;
}

const ListItem = (props: IListItem) => {
    const {unityObjectTag,
        description,
        objectPhotoUrl,
        mapPhotoUrl,
        selected,id, active,onItemClick, onItemSelect,name,Subtitle,checkBoxProps,...rest} = props;

    return (
        <ListItemButton
            {...rest}
            selected={active}
            onClick={(event) => onItemClick(id)}
        >
            <Checkbox
                onChange={(event) => onItemSelect(id,event.target.checked)}
                checked={selected}
                {...checkBoxProps}
            />
            <ListItemText sx={{textAlign:'right'}} primary={name} secondary={Subtitle}/>


        </ListItemButton>
    );
};

export {ListItem};

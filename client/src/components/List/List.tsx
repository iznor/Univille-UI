import {ListProps, List as MUIList, CheckboxProps} from "@mui/material";
import {IListItem, ListItem} from "./ListItem";
import React from "react";
import {IMarkersState} from "../GoogleMap";
import {useKeyPressEvent} from "react-use";

export interface IList extends Partial<ListProps> {
    listItems?: ObjectIds<IListItem>;
    markersState?: IMarkersState;
    onItemSelect?: (id: string, state: boolean) => void;
    onItemClick?: (id: string) => void;
    checkBoxProps?: Partial<CheckboxProps>;
    listHeader?: React.ReactNode;


}

const List = (props: IList) => {
    const {
        listItems,
        onItemClick,
        onItemSelect,
        markersState = {activeItemId: null, selectedIds: [], activeMarker: null},
        checkBoxProps,
        listHeader,
        ...rest
    } = props;

   useKeyPressEvent('ArrowDown',handleDown);
   useKeyPressEvent('ArrowUp',handleUp);
   useKeyPressEvent('Enter',handleEnter);


   function handleEnter() {
       if (markersState.activeItemId) {
           onItemSelect(markersState.activeItemId,true);
       }
   }
    function handleDown(){
        if (markersState.activeItemId) {
            const keys = Object.keys(listItems);
            const index = keys.indexOf(markersState.activeItemId);
            console.log(index)
            if (index < keys.length - 1) {
                onItemClick(keys[index + 1]);
            }
        }
    }
    function handleUp(){
        if (markersState.activeItemId) {
            const keys = Object.keys(listItems);
            const index = keys.indexOf(markersState.activeItemId);
            console.log(index)
            if (index > 0) {
                onItemClick(keys[index - 1]);
            }
        }
    }

    return (
        <MUIList
            dense
            subheader={listHeader}
            {...rest}
        >
            {Object.values(listItems).map((item) => {
                return <ListItem
                    key={`${item.id}-list-item`}
                    {...item}
                    active={markersState.activeItemId === item.id}
                    selected={markersState.selectedIds.includes(item.id)}
                    onItemClick={props.onItemClick}
                    onItemSelect={props.onItemSelect}
                    checkBoxProps={checkBoxProps}
                />
            })
            }
        </MUIList>
    );
};

export {List};

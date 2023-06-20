import {GoogleMap, IMarkerItem, IMarkersState, IStaticTarget, MapControlPosition} from "../Core";
import React, {useEffect, useMemo} from "react";
import {TargetList} from "./TargetList";
import {IListItem} from "../../List/ListItem";
import {Img} from "../../Img";
import {Box} from "@mui/material";
import {TargetModal} from "./TargetModal";
import {SVG} from "../../SVG";
import {static_targets} from "assets/targets";
import {arrToObj} from "../../../utils";
import {useSetState} from "react-use";


export interface IEditorMap{
    markersState?: IMarkersState;
    items?: ObjectIds<IStaticTarget>;
    onItemSelect?: (staticTarget:Partial<IStaticTarget>) => void;
    onItemClick?: (id: string) => void;
    onMarkerClick?: (id: string) => void;
    listTitle?: string;
    prevSelectedIds?: string[];
}

const EditorMap = (props:IEditorMap) => {

const {listTitle,onItemSelect,prevSelectedIds=[]} = props;
// const {markersState,items,listTitle,onItemSelect,onItemClick, onMarkerClick} = props;
    const [{activeItemId, selectedIds, activeMarker}, setState] =
        useSetState({activeItemId: null, selectedIds: [], activeMarker: null});
    const items = useMemo(() => arrToObj(static_targets), []);

    useEffect(() => {
        setState({selectedIds: prevSelectedIds});
    }, []);
    const handleItemClick = (id: string) => {
        console.log('item click', id, items[id])
        setState({activeItemId: id, activeMarker: items[id]});
    }

    const handleItemSelect = (id: string, state: boolean) => {
        console.log('item select', id, state)
        if (!selectedIds.includes(id)) {
            setState({selectedIds: [...selectedIds, id]});
            onItemSelect(items[id]);
        } else {
            setState({selectedIds: selectedIds.filter((selectedId) => selectedId !== id)});
        }
    }

    const handleMarkerClick = (id: string) => {
        console.log('marker click', id, items[id], activeMarker)
        setState({activeItemId: id, activeMarker: items[id]});
    }
 return (
     <GoogleMap
         markers={items}
         markersState={{activeItemId, selectedIds, activeMarker}}
         onMarkerClick={handleMarkerClick}
         onItemSelect={handleItemSelect}
         mapContainerStyle={mapContainerStyle}
         controlSections={[
          {
           position: MapControlPosition.TOP_RIGHT,
           children: <TargetList
                title={listTitle}
               items={items}
               markersState={{activeItemId, selectedIds, activeMarker}}
               onItemClick={handleItemClick}
               onItemSelect={handleItemSelect}
               checkBoxProps={{
                   checkedIcon: <SVG name={"delete-trash"}/>,
                   icon: <SVG name={"add-plus"}/>,
               }}
           />,
           id: 'editor-list'
          }

         ]}
         markerInfo={<TargetModal/>}
     />
 );
};


const mapContainerStyle = {
    height: "90vh",
    width: "80vw"
}
export {EditorMap};

import React, {useState} from "react";
import {makeStyles} from 'tss-react/mui';
import {Box} from "@mui/material";
import {Dialog, EditorMap, IEditorMap, IMarkerItem, IStaticTarget} from "components";
import {IModalState} from "../../../hooks";
import {useTranslation} from "react-i18next";
import {IListItem} from "../../../components/List/ListItem";

export interface ITargetsModal extends Partial<IEditorMap>{
 modalState?: Partial<IModalState>;
 onTargetSelect?:(staticTarget:Partial<IStaticTarget>)=>void
 multiple?:boolean;
 onConfirm?:(staticTarget:Partial<IStaticTarget>[])=>void;
}

const TargetsModal = (props:ITargetsModal) => {
const {modalState,onTargetSelect,multiple,onConfirm} = props;
 const {t} = useTranslation();
const {classes, cx} = useStyle();
const [selectedTargets,setSelectedTargets] = useState<Partial<IStaticTarget>[]>([]);
const handleTargetSelected = (target: Partial<IStaticTarget>) => {
 if(multiple){
    setSelectedTargets([...selectedTargets,target]);
 }else {
    onTargetSelect(target);
    modalState.close(null);
    return;
 }
}

const handleConfirm = (e) => {
    onConfirm(selectedTargets);
    modalState.close(e);
}

 return (
  <Dialog
      onOk={multiple?handleConfirm:null}
      className={cx(classes.root)} dialogTitle={"Choose Target"} modalState={modalState} draggable>
   <EditorMap
       // markersState={{activeItemId, selectedIds, activeMarker}}
       // items={items}
       listTitle={t("targets.list.title")}
       onItemSelect={handleTargetSelected}


       // onItemClick={onItemClick}
       // onMarkerClick={onMarkerClick}
   />
  </Dialog>
 );
};

export {TargetsModal};

const useStyle = makeStyles()((theme) => ({
 root: {


 },

}));

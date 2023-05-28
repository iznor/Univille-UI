import React, {useMemo} from "react";
import {makeStyles} from 'tss-react/mui';
import {Button} from "@mui/material";
import {IStaticTarget, P} from "../../../../components";
import {useModal} from "../../../../hooks";
import {TargetsModal} from "../../TargetsMap";
import {AddLocationAlt} from "@mui/icons-material";
interface ITargetMapTrigger{
values?:Partial<IMission>[];
onValuesChange?:(values:Partial<IMission>[])=>void;
}

const TargetsInputMultiple = (props:ITargetMapTrigger) => {
 const [chooseTargetsModalState] = useModal({modalId:`choose-targets-modal`})
const {values=[],onValuesChange} = props;
const {classes, cx} = useStyle();

const prevSelectedTargets = useMemo(() => values.map(mission =>mission.target.id),[values])

 const handleConfirm = (targets:Partial<IStaticTarget>[]) => {
    const removedTargets = values.filter(mission => !targets.find(target => target.id === mission.target.id))
    const addedTargets = targets.filter(target => !prevSelectedTargets.includes(target.id)).map(target => ({target}))
     const newMissions = targets.map(target => ({
         target:{
             objectTag:target?.unityObjectTag??target?.objectTag??"",
             image:target?.objectPhotoUrl??"",
             title:target?.name??target?.title??"",
             location:target?.location??{x:0,y:0},
             id:target?.id??"",
         },
         name:target?.name??target?.title??"",
         description:target?.description??"",
         hint:{
             title:target?.name??target?.title??"",
             text:`Go to ${target?.name??target?.title??""}`,
             image:target?.mapPhotoUrl??""
         },
         id:Math.random().toString(),
         image:target.objectPhotoUrl,
         score:1,
     }))
     onValuesChange(newMissions)
 }

 return (
  <><Button onClick={(e)=>chooseTargetsModalState.open(e)} variant="contained" className={cx(classes.root)} color="secondary" endIcon={<AddLocationAlt/>}>
   <P fontWeight="bold">Add Multiple Missions Quickly
   </P>
  </Button>

   <TargetsModal modalState={chooseTargetsModalState} onConfirm={handleConfirm} multiple />
  </>
 );
};

export {TargetsInputMultiple};

const useStyle = makeStyles()((theme) => ({
 root: {
     borderRadius:"50px"

 },

}));

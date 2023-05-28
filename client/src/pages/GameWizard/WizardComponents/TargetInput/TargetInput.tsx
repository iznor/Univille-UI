import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Box, Button} from "@mui/material";
import {Column, Img, IStaticTarget, P, Row, TextInput} from "components";
import {useModal} from "hooks";
import {ITargetsModal, TargetsModal} from "../../TargetsMap";
import {AddLocationAlt, AddLocation} from '@mui/icons-material';
interface ITargetInput extends Partial<ITargetsModal>{
value?:Partial<IMission>[];
onValueChange:(value:Partial<IMission>)=>void;
}

const TargetInput = (props:ITargetInput) => {
 const {value,onValueChange,...rest} = props;
 const {classes, cx} = useStyle();
    const [chooseTargetModalState] = useModal({modalId:`choose-target-modal`})

    const handleTargetSelect = (target:Partial<IStaticTarget>) => {
        console.log(target)
        const updatedMission = {
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
        }
        onValueChange(updatedMission)
    }

 return (
     <>
         <Column className={cx(classes.root)}>
         <Button onClick={(e)=>chooseTargetModalState.open(e)} variant="contained" className={cx(classes.root)} color="warning" size="small" endIcon={<AddLocation/>}>
                <P fontWeight="bold">Change Target</P>
         </Button>
     </Column>
         <TargetsModal modalState={chooseTargetModalState} onTargetSelect={handleTargetSelect} />
     </>
 );
};

export {TargetInput};

const useStyle = makeStyles()((theme) => ({
 root: {
     "& button":{
         borderRadius:"50px"
     }


 },

}));

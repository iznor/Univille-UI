import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Chip, ListItem, Paper} from "@mui/material";
import {TagFaces} from "@mui/icons-material";
import {useUi} from "store";

interface IColorChip{
colors?:IGroupColor[];
}

const ColorChips = (props:IColorChip) => {
const {colors=[]} = props;
 const {classes, cx} = useStyle();
 const {uiState} = useUi();
 return (
     <Paper className={cx(classes.root)} component="ul">
      {colors.map((data,index) => {
       return (
           <ListItem key={data.hex}>
            <Chip sx={{backgroundColor:'transparent',fontSize:"9px","& .MuiSvgIcon-root":{color:data.hex,width:15}}}
                icon={<TagFaces/>}
                label={uiState.rtl?data.heb:data.name}
            />
           </ListItem>
       );
      })}
     </Paper>
 );
};

export {ColorChips};
const useStyle = makeStyles()((theme) => ({
 root: {
  backgroundColor:'none',
  display: 'flex',
  opacity:0.8,
 flexDirection:'column',
  maxHeight:60,
  overflowY:"auto",
  listStyle: 'none',
  padding: 0.5,
  margin: 0,
  "& li":{
   padding:"0px"
  }

 },

}));

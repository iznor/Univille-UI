import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Box, Card, CardContent, CardMedia} from "@mui/material";
import {P} from "components";

interface IDescriptionDisplay{
description:string
}

const DescriptionDisplay = (props:IDescriptionDisplay) => {
const {description} = props;
const {classes, cx} = useStyle();
 return (
     <Card className={cx(classes.root)}>
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
             <CardContent sx={{ padding:"7px",overflowY:'auto' }}>
                 <P fontSize={13}>
                    {"Description"}
                 </P>
                 <P variant="subtitle1" color="text.secondary" fontSize={12}>
                     {description??"description"}
                 </P>
             </CardContent>
         </Box>
     </Card>
 );
};

export {DescriptionDisplay};

const useStyle = makeStyles()((theme) => ({
 root: {
     maxWidth:"300px",
     maxHeight:"100px",
     backgroundColor: theme.palette.app.cardBg,
     display: 'flex',
     justifyContent: 'space-between',

 },

}));

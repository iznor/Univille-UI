import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Box, Card, CardContent, CardMedia} from "@mui/material";
import {Column, Img, P, Row} from "../../../../components";

interface IHintDisplay{
hint:IHint
}

const HintDisplay = (props:IHintDisplay) => {
const {hint} = props;
const {classes, cx} = useStyle();
 return (
     <Card className={cx(classes.root)}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
       <CardContent sx={{ padding:"7px" }}>
        <P fontSize={13}>
         title:&nbsp;{hint?.title ?? "title"}
        </P>
        <P variant="subtitle1" color="text.secondary" fontSize={12}>
         text:&nbsp;{hint?.hint ?? hint?.text ?? `${hint?.title ?? "title"} מצאו את`}
        </P>
       </CardContent>
      </Box>
      <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={hint.image}
      />
     </Card>
 );
};

export {HintDisplay};

const useStyle = makeStyles()((theme) => ({
 root: {
  backgroundColor: theme.palette.app.cardBg,
  display: 'flex',
  justifyContent: 'space-between',

 },

}));

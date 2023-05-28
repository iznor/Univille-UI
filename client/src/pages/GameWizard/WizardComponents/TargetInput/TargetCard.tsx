import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Box, CardContent,Card,Typography,IconButton,CardMedia} from "@mui/material";
import {PlayArrow, SkipNext} from "@mui/icons-material";
import {P} from "../../../../components";

interface ITargetCard{
    target:ITarget
}

const TargetCard = (props:ITargetCard) => {
const {target} = props;
const {classes, cx} = useStyle();
 return (
      <Card className={cx(classes.root)}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ padding:"7px" }}>
                  <P fontSize={13}>
                      {target?.title ?? ""}
                  </P>
                  <P variant="subtitle1" color="text.secondary" fontSize={12}>
                      {target?.objectTag ?? ""}
                  </P>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <P variant="subtitle1" color="text.secondary" fontSize={9}>
                     X: {target?.location?.x.toFixed(1) ?? 0}, Y: {target?.location?.y.toFixed(1) ?? 0}
                  </P>
              </Box>
          </Box>
          <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={target.image}
              alt="Live from space album cover"
          />
      </Card>
 );
};

export {TargetCard};

const useStyle = makeStyles()((theme) => ({
 root: {
     backgroundColor: theme.palette.app.cardBg,
     display: 'flex',
     justifyContent: 'space-between',
 },

}));

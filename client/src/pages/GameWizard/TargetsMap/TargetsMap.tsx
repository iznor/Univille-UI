import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {EditorMap, IEditorMap} from "components";
import {useTranslation} from "react-i18next";

interface ITargetsMap extends IEditorMap{

}

const TargetsMap = (props:ITargetsMap) => {
const {markersState:{activeItemId, selectedIds, activeMarker},
items,onItemSelect,onItemClick,onMarkerClick} = props;
 const {t} = useTranslation();
const {classes, cx} = useStyle();
 return (
  <Box className={cx(classes.root)}>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
     <Typography>{t("targets.map.title")}</Typography>
    </AccordionSummary>
    <AccordionDetails>
     <EditorMap
         markersState={{activeItemId, selectedIds, activeMarker}}
         items={items}
         listTitle={t("targets.list.title")}
         onItemSelect={onItemSelect}
         onItemClick={onItemClick}
         onMarkerClick={onMarkerClick}
     />
    </AccordionDetails>
   </Accordion>
  </Box>
 );
};

export {TargetsMap};

const useStyle = makeStyles()((theme) => ({
 root: {


 },

}));

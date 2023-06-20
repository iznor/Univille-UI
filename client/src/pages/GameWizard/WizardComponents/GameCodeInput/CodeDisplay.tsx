import {TagFaces} from "@mui/icons-material";
import {Chip} from "@mui/material";
import React from "react";
import {makeStyles} from 'tss-react/mui';
import LockIcon from '@mui/icons-material/Lock';
interface ICodeDisplay{
code?:string;
}

const CodeDisplay = (props:ICodeDisplay) => {
const {code=""} = props;
    const {classes, cx} = useStyle();
 return (
     <Chip className={cx(classes.root)}
           icon={<LockIcon/>}
           label={code}
     />
 );
};

export {CodeDisplay};

const useStyle = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.purple[300],
        color: theme.palette.dark[100],
        "& svg": {
            color:"yellow"
        }


    },

}));

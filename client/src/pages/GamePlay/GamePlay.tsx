import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MaterialTable, {Column} from "@material-table/core";
import React from "react";
import {IUserState} from "../../store/reducers";
import {useData} from "../../store";
import {Box} from "@mui/material";

interface IGamePlay{

}

const GamePlay = (props:IGamePlay) => {
const {} = props;
const {dataActions,dataState} = useData();




 return (
    <Box>GamePlay</Box>
 );
};



export {GamePlay};

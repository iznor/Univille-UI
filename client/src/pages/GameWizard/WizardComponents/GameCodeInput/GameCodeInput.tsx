import {P, Row, SVG} from "components";
import {makeStyles} from 'tss-react/mui';
import React, {useEffect} from "react";
import {idGenerator} from "utils";
import {Box} from "@mui/material";

interface IGameCodeInput{
value?:string;
onChange:(value:string)=>void;
}

const GameCodeInput = (props:IGameCodeInput) => {
const {value,onChange} = props;
const {classes, cx} = useStyle();

useEffect(() => {
    if(!value){
        onChange(idGenerator(5,"A#!"));
    }
},[])

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onChange(idGenerator(5,"A#!"));
    }

 return (
  <Row className={cx(classes.root)}>
      <P>{value}</P>
      <SVG name={"refresh"} onClick={handleClick} size={30}/>
  </Row>
 );
};

export {GameCodeInput};

const useStyle = makeStyles()((theme) => ({
    root: {
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: theme.palette.purple[300],
        padding:"0.2rem 0.4rem",
        "& p": {
            color: theme.palette.dark[100],

            letterSpacing:"0.1rem",
            fontWeight:800,
        },
        "& svg": {
            cursor:"pointer",
        }


    },

}));

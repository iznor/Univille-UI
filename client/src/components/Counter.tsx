import React from "react";
import CountUp from "react-countup";
import {Box} from "@mui/material";
import {makeStyles} from 'tss-react/mui';

interface ICounter {
    number: number;
    title: string;
    duration?: number;
}

const Counter = (props: ICounter) => {
    const {number, title, duration = 10} = props;
    const {classes, cx} = useStyle();
    return (
        <Box className={cx(classes.root)}>
            <CountUp duration={duration} className={cx(classes.counter)} end={number}/>
            <span className={cx(classes.title)}>{title}</span>
        </Box>
    );
};

const useStyle = makeStyles()((theme) => ({
    root: {
        marginRight: "20px",
        marginLeft: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    counter: {
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: "1.9em",
        margin: "6px 0"
    },
    title: {
        fontSize: "1.2em",
        display: "block"
    },
}));

export {Counter};

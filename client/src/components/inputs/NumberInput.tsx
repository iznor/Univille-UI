import {makeStyles} from 'tss-react/mui';
import React from "react";
import {Box, Button} from "@mui/material";
import {Span,P} from "../text";
import {Column, Row} from "../basic";
import {useUi} from "../../store";

interface INumberInput {
    value: number;
    onChange: (value: number) => void;
    label?: string;
    min?: number;
    max?: number;

}

const NumberInput = (props: INumberInput) => {
    const {value, onChange, min=0, max=100,label=""} = props;
    const {uiState, uiActions} = useUi();
    const {classes, cx} = useStyle({rtl: uiState.rtl});

    const handleMinus = () => {
        if (value > min) {
            onChange(value - 1);
        }
    }
    const handlePlus = () => {
        if (value < max) {
            onChange(value + 1);
        }
    }
    return (
        <Column alignItems="center" marginTop="5px">
            <Box className={cx(classes.root)}>
            <button onClick={handleMinus}>&minus;</button>
            <Span className={cx(classes.num)}>{value}</Span>
            <button onClick={handlePlus}>&#43;</button>
        </Box>
            <P sx={{fontSize:"9px"}}>{label}</P>
        </Column>
    );
};

export {NumberInput};

const useStyle = makeStyles<{rtl}>()((theme,{rtl}) => ({
    root: {
        position: "relative",
        width: "100px",
        height: "20px",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: "20px",
        margin: "2px",
        "& button": {
            display: 'inline-block',
            width: "50px",
            height: "100%",
            // backgroundColor: "transparent",
            border: "none",
            color: theme.palette.text.primary,
            fontSize: "13px",
            cursor: "pointer",
            backgroundColor: "rgba(255,255,255,.2)",
            transition: "background-color .2s ease",
            '&:hover': {
                backgroundColor: "rgba(255,255,255,.4)",
            },
            '&:nth-of-type(1)': {
                paddingRight: rtl?0:"20px",
                paddingLeft: rtl?"20px":0,
            },
            '&:nth-of-type(2)': {
                paddingLeft: rtl?0:"20px",
                paddingRight: rtl?"20px":0,
            }
        }
    },
    num: {
        position: "absolute",
        left: "50%",
        marginLeft: "-15px",
        display: "inline-block",
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        width: "30px",
        borderRadius: "20px",
        textAlign: "center",
        lineHeight: "22px",
        color: theme.palette.text.primary,
        fontSize: "13px",
        letterSpacing: "-1px"
    },
}));

import React from "react";
import {makeStyles} from 'tss-react/mui';
import {Box} from "@mui/material";
import {Column, Img, P, Row} from "../../../../components";

interface ITargetDisplay {
    target?: ITarget
}

const TargetDisplay = (props: ITargetDisplay) => {
    const {target} = props;
    const {classes, cx} = useStyle();
    return (
        <Row className={cx(classes.root)}>
            <Column spacing={1} mx={"15px"}>
                <Row spacing={1}>
                    <P fontWeight="bold">Name: </P>
                    <P>{target?.title ?? ""}</P>
                </Row>
                <Row spacing={1}>
                    <P fontWeight="bold">Object Tag: </P>
                    <P>{target?.objectTag ?? ""}</P>
                </Row>
                <Row spacing={1}>
                    <P fontWeight="bold">Location: </P>
                    <P>X: {target?.location?.x.toFixed(1) ?? 0}, Y: {target?.location?.y.toFixed(1) ?? 0}</P>
                </Row>
            </Column>
            <Img src={target.image}/>
        </Row>
    );
};

export {TargetDisplay};

const useStyle = makeStyles()((theme) => ({
    root: {
        flexDirection: "row-reverse",
        "& p": {
            fontSize: "0.8rem",
            margin: 0,
            padding: 0,
            // overflow: 'hidden',
            // width: '20px',
            // textOverflow: 'ellipsis',

        },
        "& img": {
            width: "70px",
            height: "70px",
            objectFit: "cover",

        }

    },

}));

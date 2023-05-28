import React from "react";
import {Box, Grid, Input, Slider, Typography} from "@mui/material";
import {AccessAlarms} from "@mui/icons-material";
import {Column, Row, P} from "components";

interface IDurationInput {
    onChange: (value: number | string | Array<number | string>) => void;
    value: number | string | Array<number | string>;
}

const DurationInput = (props: IDurationInput) => {
    const {onChange, value = 5} = props;
    // const [value, setValue] = React.useState<number | string | Array<number | string>>(
    //     30,
    // );

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        onChange(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 1) {
            onChange(1);
        } else if (value > 100) {
            onChange(100);
        }
    };

    return (
        <Row spacing={2} sx={{width: 150}}>

            <Row spacing={2} alignItems="center" sx={{width:"100%"}}>
                {/*<Grid item>*/}
                {/*    <AccessAlarms/>*/}
                {/*</Grid>*/}
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 1}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Row>
            <Column sx={{paddingBottom:"13px"}}>
                <P fontSize={10} alignSelf="baseline">
                    Minutes
                </P>
                <Input
                    sx={{width: 50,fontSize:"13px"}}
                    value={value}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                        step: 10,
                        min: 1,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
            </Column>
        </Row>
    );
};

export {DurationInput};

import {Divider as MuiDivider, DividerProps} from "@mui/material";
import {makeStyles} from "tss-react/mui";

interface IDivider extends Partial<DividerProps> {
    lineColor?: colorProp;
    full?: boolean;
    gapX?: string|number;
    gapY?: string|number;
}

const Divider = (props: IDivider) => {
    const {lineColor = "toggle.bg", full,gapX,gapY, ...rest} = props;

    const {classes, cx} = useStyles({lineColor});

    return (
        <MuiDivider className={cx(classes.root)} variant={full ? "fullWidth" : "middle"} flexItem
                    sx={{backgroundColor: lineColor,...(gapX&&{mx:gapX}),...(gapY&&{my:gapY})}} {...rest} />
    );
};

export {Divider};

const useStyles = makeStyles<{ lineColor }>()(
    (theme, {lineColor}) => ({
            "root": {
                mx:'25px'
                // backgroundColor:'app.borderSelected'
            },
        }
    )
);

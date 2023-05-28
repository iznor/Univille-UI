import {makeStyles} from 'tss-react/mui';
import React, {useEffect} from "react";
import {Tooltip,Row} from "components";

interface IColorsInput {
    count: number;
    value?: IGroupColor[];
    onChange?: (value: IGroupColor[]) => void;


}

const getRandomHexColor = () => {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

}
const colorBank = [
    {name: "red", hex: "#f44336",heb:"אדום"},
    {name: "orange", hex: "#ff9800",heb:"כתום"},
    {name: "yellow", hex: "#ffeb3b",heb:"צהוב"},
    {name: "lime", hex: "#cddc39",heb:"ירוק בהיר"},
    {name: "green", hex: "#4caf50",heb:"ירוק"},
    {name: "teal", hex: "#009688",heb:"טורקיז"},
    {name: "cyan", hex: "#00bcd4",heb:"כחול בהיר"},
    {name: "blue", hex: "#2196f3",heb:"כחול"},
    {name: "indigo", hex: "#3f51b5",heb:"אינדיגו"},
    {name: "violet", hex: "#9c27b0",heb:"בהיר סגול"},
    {name: "purple", hex: "#673ab7",heb:"סגול כהה"},
    {name: "pink", hex: "#e91e63",heb:"ורוד"},
    {name: "brown", hex: "#795548",heb:"חום"},
    {name: "grey", hex: "#9e9e9e",heb:"אפור"},
]
const getRandomColor = () => {
    return colorBank[Math.floor(Math.random() * colorBank.length)];
}
const getRandomColorUnique = (usedColors:IGroupColor[]) => {
    const newColor = getRandomColor();
    if(colorBank.length === usedColors.length){
        return newColor;
    }
    if(usedColors.find(color => color.hex === newColor.hex)){
        return getRandomColorUnique(usedColors);
    }
    return newColor;
}
const ColorsInput = (props: IColorsInput) => {
    const {count, value=[], onChange} = props;
    const {classes, cx} = useStyle();
    const [colors, setColors] = React.useState<IGroupColor[]>([]);

    const handleChange = (newColors:IGroupColor[]) => {
      if(onChange){
          setColors(newColors);
          onChange(newColors);
      }
    }
    useEffect(() => {
        if (value.length !== count) {
            const newColors = [...value];
            if (value.length < count) {
                for (let i = value.length; i < count; i++) {
                    newColors.push(getRandomColorUnique(value));
                }
            } else if (value.length > count) {
                newColors.splice(count, value.length - count);
            }
            handleChange(newColors);
        }
    }, [count, value])
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>, index) => {
        const newColors = [...colors];
        newColors[index].hex = event.target.value;
        handleChange(newColors);
    }

    const handleColorClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>, index) => {
        event.preventDefault();
        const newColors = [...colors];
        newColors[index] = getRandomColorUnique(colors);
        handleChange(newColors);
    }
    return (
        <Row className={cx(classes.root)}>
            {
                colors.map((color, index) => {
                    return <Tooltip key={index}  title={color.name}><input type="color" value={color.hex}onChange={(e) => handleColorChange(e, index)} onClick={(e) => handleColorClick(e, index)}/></Tooltip>
                })
            }
        </Row>
    );
};

export {ColorsInput};

const useStyle = makeStyles()((theme) => ({
    root: {
        width: "100px",
        flexWrap: "wrap",
        "& input[type=color]": {
            "WebkitAppearance": "none",
            cursor: "pointer",
            border: `1px solid ${theme.palette.text.primary}`,
            padding: 0,
            margin: "5px",
            width: "20px",
            height: "20px",
            // margin: "5px",
            // padding: 0
            "&::-webkit-color-swatch-wrapper": {
                padding: 0,
            },
            "&::-webkit-color-swatch": {
                border: "none",
            }
        },

    },

}));

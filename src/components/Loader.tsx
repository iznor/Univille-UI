import {useUi} from "../store";
import {Box} from "@mui/material";
import {Img} from "./Img";

interface ILoader{

}

const Loader = (props:ILoader) => {
const {} = props;
const {uiState: {loading}} = useUi();
 if(loading){
    return <Box sx={loaderSx}><Box><Img img={"univille-logo.png"} width={80}/></Box></Box>
 }else return null;
};
const loaderSx = {
    userSelect:'none',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex:50,
    background:'rgba(45,44,44,0.6)',
    '& div':{
        userSelect:'none',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        '& span':{
            left: '50%',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'mymove 1s infinite',
            '@keyframes mymove': {
                from: {
                    transform: 'rotate(0deg)',
                },
                to: {
                    transform: 'rotate(359deg)',
                }
            }
        }
    },

}
export {Loader};

import {useUi} from "../store";
import {Alert, Slide, SlideProps, Snackbar} from "@mui/material";
import React from "react";

interface IMessageDialog{

}

const MessageDialog = (props:IMessageDialog) => {
const {} = props;
const {uiState,uiActions} = useUi()
const {
     open = false,
        severity = 'error',
        message = "Error",
        position = 'br',
        timeout = 2500,
} = uiState.alert
 return (
     <Snackbar
         open={open}
         onClose={uiActions.closeSnackbar}
         autoHideDuration={timeout}
         TransitionComponent={TransitionLeft}
         anchorOrigin={{
          vertical: position.indexOf("t") === -1 ? 'bottom' : 'top',
          horizontal: position.indexOf("l") !== -1 ? 'left'
              : position.indexOf('c') !== -1 ? 'center' : 'right',
         }}
     ><Alert severity={severity} >{message}</Alert>
     </Snackbar>
 );
};

type TransitionProps = Omit<SlideProps, 'direction'>;
function TransitionLeft(props: TransitionProps) {
 return <Slide {...props} direction="right" />;
}


export {MessageDialog};

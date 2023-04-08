import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useWithDialog } from './hooks/useWithDialog';

interface WithDialogProps<T extends React.ElementType> {
  component: T;
  componentProps?: React.ComponentProps<T>;
  buttonBeforeText?: string | undefined;
  titleText: string;
  messageText: string;
  agreeText: string;
  declineText: string;
  handleAgree: () => void;
  handleDecline: () => void;
}
export const WithDialog = <T extends React.ElementType>(
  props: WithDialogProps<T>
) => {
  const {
    titleText,
    messageText,
    declineText,
    agreeText,
    handleDecline,
    handleAgree,
    component,
    componentProps,
  } = props;
  const { handleClickOpen, handleClose, fullScreen, open } = useWithDialog();

  const WrappedElement = React.createElement(component, {
    ...componentProps,
    onClick: handleClickOpen,
  });

  return (
    <div>
      {WrappedElement}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{titleText}</DialogTitle>
        <DialogContent>
          <DialogContentText>{messageText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {declineText}
          </Button>
          <Button onClick={handleAgree} autoFocus>
            {agreeText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

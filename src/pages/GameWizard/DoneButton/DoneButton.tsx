import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Done } from '@mui/icons-material';
import { LocationItem } from '../consts';
import { useEffect, useState } from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type DoneButtonProps = {
  item: LocationItem;
};
export const DoneButton = (props: DoneButtonProps) => {
  const { item } = props;
  const { hint } = item;
  const [open, setOpen] = React.useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>(
    "Can't save: please submit hint"
  );
  useEffect(() => {
    setOpen(false);
    hint
      ? setSnackBarMessage('Success: Hint saved')
      : setSnackBarMessage("Can't save: please submit hint");
  }, [hint]);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick}>
        <Done />
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={hint ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

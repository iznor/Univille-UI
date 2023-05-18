import { useWithDialog, WithDialog } from '../WithDialog';
import { DeleteButton } from '../DeleteButton';
import React from 'react';
import { LocationItem } from '../consts';
import { useLocationItems } from '../hooks';

interface DeleteItemWithDialogProps {
  item: LocationItem;
  removeHandler: (item: LocationItem) => void;
}
export const DeleteItemWithDialog = (props: DeleteItemWithDialogProps) => {
  const { item, removeHandler } = props;
  const { handleClose } = useWithDialog();

  return (
    <WithDialog
      component={DeleteButton}
      titleText={`Delete Location`}
      messageText={`Delete ${item.name} from the table ?`}
      agreeText={'Delete'}
      declineText={'Cancel'}
      handleAgree={() => removeHandler(item)}
      handleDecline={handleClose}
    />
  );
};

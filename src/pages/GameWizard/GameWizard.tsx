import React from 'react';
import './GameWizard.scss';
import { LocationSelector } from './LocationSelector';
import { useLocationItems } from './hooks';
import { LocationItem } from './consts';
import { TableCell, TableRow } from '@mui/material';
import { LocationsTable } from './LocationsTable';
import { HintInput } from './HintInput';
import { WithDialog, useWithDialog } from './WithDialog';
import { DeleteButton } from './DeleteButton';

interface GameWizardProps {}

const GameWizard = (props: GameWizardProps) => {
  // const {} = props;
  const { itemsList, selectedItems, handleSelect, handleRemove } =
    useLocationItems();

  const { handleClose } = useWithDialog();

  return (
    <>
      <LocationSelector
        itemsList={itemsList}
        selectedItems={selectedItems}
        selectItem={(item: LocationItem) => handleSelect(item)}
        removeItem={(item: LocationItem) => handleRemove(item)}
      />
      <LocationsTable
        rows={selectedItems.map((item) => (
          <TableRow key={item.unityObjectTag}>
            <TableCell>{selectedItems.indexOf(item) + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <HintInput
                key={item.unityObjectTag}
                item={item}
                hint={item.hint}
              />
            </TableCell>
            <TableCell>
              <WithDialog
                component={DeleteButton}
                componentProps={{
                  color: 'error',
                  cursor: 'pointer',
                }}
                titleText={`Delete Location`}
                messageText={`Delete ${item.name} from the table ?`}
                agreeText={'Delete'}
                declineText={'Cancel'}
                handleAgree={() => handleRemove(item)}
                handleDecline={handleClose}
              />
            </TableCell>
          </TableRow>
        ))}
      />
    </>
  );
};

export { GameWizard };

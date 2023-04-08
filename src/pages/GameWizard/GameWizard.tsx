import React from 'react';
import './GameWizard.scss';
import { TableCell, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import { LocationSelector } from './LocationSelector';
import { LocationItem } from './consts';
import { LocationsTable } from './LocationsTable';
import { HintInput } from './HintInput';
import { DeleteItemWithDialog } from './DeleteItemWithDialog';
import { useLocationItems, useGame } from './hooks';

interface GameWizardProps {}

const GameWizard = (props: GameWizardProps) => {
  // const {} = props;
  const { itemsList, selectedItems, handleSelect, handleRemove } =
    useLocationItems();
  const { handleGameCreation, isGameReady } = useGame();
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
              <DeleteItemWithDialog
                item={item}
                removeHandler={(item) => handleRemove(item)}
              />
            </TableCell>
          </TableRow>
        ))}
      />
      {!isGameReady && (
        <Button onClick={() => handleGameCreation(selectedItems)}>
          Finish
        </Button>
      )}
    </>
  );
};

export { GameWizard };

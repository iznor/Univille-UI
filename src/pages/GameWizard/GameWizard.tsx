import React, { useEffect } from 'react';
import './GameWizard.scss';
import { TableCell, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import { LocationSelector } from './LocationSelector';
import { LocationItem } from './consts';
import { LocationsTable } from './LocationsTable';
import { HintInput } from './HintInput';
import { DeleteItemWithDialog } from './DeleteItemWithDialog';
import { useLocationItems, useGame } from './hooks';
import { SettingsForm } from './SettingsForm/SettingsForm';
import { P } from '../../components';

interface GameWizardProps {}

const GameWizard = (props: GameWizardProps) => {
  // const {} = props;
  const { itemsList, selectedItems, handleSelect, handleRemove } =
    useLocationItems();
  const { handleGameCreation, isGameReady, isMissingHints } = useGame();

  useEffect(() => {
    console.log(isGameReady);
  }, [isGameReady]);
  return !isGameReady ? (
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
      <SettingsForm selectedItems={selectedItems} />
      {isMissingHints && <P style={{ color: 'red' }}>Missing hints</P>}
    </>
  ) : (
    <P>Game is ready</P>
  );
};

export { GameWizard };

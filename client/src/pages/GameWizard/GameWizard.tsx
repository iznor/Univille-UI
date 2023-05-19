import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Snackbar,
  TableCell,
  TableRow,
} from '@mui/material';
import Button from '@mui/material/Button';
import { LocationSelector } from './LocationSelector';
import { LocationItem } from './consts';
import { LocationsTable } from './LocationsTable';
import { HintInput } from './HintInput';
import { DeleteItemWithDialog } from './DeleteItemWithDialog';
import { useLocationItems, useGame } from './hooks';
import { SettingsForm } from './SettingsForm/SettingsForm';
import { H1, H2, H3, P, Row } from '../../components';
import { GameStart } from './GameStart/GameStart';
import { Done } from '@mui/icons-material';
import { DoneButton } from './DoneButton';

interface GameWizardProps {}

const GameWizard = (props: GameWizardProps) => {
  // const {} = props;
  const { itemsList, selectedItems, handleSelect, handleRemove } =
    useLocationItems();
  const [isGameReady, setIsGameReady] = useState<boolean>(false);
  const { isMissingHints } = useGame();
  const [gameId, setGameId] = useState<string>('');
  const [timer, setTimer] = useState<number>(20000);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const getGameId = (): Promise<string> => {
    return fetch('https://api.kanye.rest/')
      .then((response) => response.json())
      .then((data) =>
        data.quote.substring(0, 6).trim().replace(/ /g, '').toUpperCase()
      );
  };
  const startTimer = () => {
    setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
  };

  useEffect(() => {
    getGameId().then((quote) => setGameId(quote));
  }, []);

  useEffect(() => {
    // todo - GET GameId from server
  }, [isMissingHints, isGameReady, timer, gameStarted]);
  return !isGameReady ? (
    <>
      <Card sx={{ marginBottom: '10px', marginTop: '10px' }}>
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
              <TableCell sx={{ display: 'flex', gap: '10px' }}>
                <DoneButton item={item} />
                <DeleteItemWithDialog
                  item={item}
                  removeHandler={(item) => handleRemove(item)}
                />
              </TableCell>
            </TableRow>
          ))}
        />
      </Card>
      <SettingsForm
        selectedItems={selectedItems}
        setGameReady={setIsGameReady}
      />
      {isMissingHints && <P style={{ color: 'red' }}>Missing hints</P>}
    </>
  ) : (
    <GameStart
      gameId={gameId}
      timer={timer}
      startTimer={startTimer}
      gameStarted={gameStarted}
      setGameStarted={setGameStarted}
    />
  );
};

export { GameWizard };

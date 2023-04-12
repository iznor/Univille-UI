import { GameSettings, LocationItem, Mission } from '../consts';
import { Game } from '../../../classes';
import { useLocationItems } from './useLocationItems';
import { useEffect, useState } from 'react';
import { IFormValues } from '../../../hooks/useForm/useForm';

export const useGame = () => {
  const { selectedItems } = useLocationItems();
  const [isGameReady, setIsGameReady] = useState<boolean>(false);
  const [isMissingHints, setIsMissingHints] = useState<boolean>(false);
  const game: Game | undefined = new Game(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );
  // todo: validation function - verify there is no 'undefined' fields before sending to the server.
  const isHintsValid = (selectedItems: LocationItem[]): boolean => {
    const itemsWithoutHints: string[] = [];
    selectedItems.forEach((item: LocationItem) => {
      !item.hint && itemsWithoutHints.push(`${item.name}`);
    });
    return !itemsWithoutHints.length;
  };

  const handleGameCreation = (
    selectedItems: LocationItem[],
    formValues: IFormValues
  ) => {
    const { value: timeLimit } = formValues.timeLimit;
    const { value: numberOfGroups } = formValues.numberOfGroups;
    const { value: classroomName } = formValues.classroomName;
    const gameMissions: Mission[] = [];
    isHintsValid(selectedItems) &&
      selectedItems.forEach((item: LocationItem) => {
        gameMissions.push({
          unityObjectTag: item.unityObjectTag,
          hint: item.hint,
        });
      });
    if (gameMissions.length) {
      game.setMissions(gameMissions);
      game.setTimeLimitMinutes(parseInt(timeLimit));
      game.setNumberOfGroups(parseInt(numberOfGroups));
      game.setClassroomName(classroomName);
      console.log('trigger setIsGameReady');
      setIsGameReady(true); // todo - fix - it doesnt trigger gameWizard re-rendering
      console.log('after trigger setIsGameReady');
    } else {
      setIsMissingHints(true);
      setIsGameReady(false);
    }
    console.log(JSON.stringify(game)); // dev - sanity check (to be removed)
  };
  useEffect(() => {}, [selectedItems, isGameReady, isMissingHints]);

  return { handleGameCreation, isGameReady, setIsGameReady, isMissingHints };
};

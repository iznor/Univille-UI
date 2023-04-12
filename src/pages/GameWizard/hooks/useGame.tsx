import { GameSettings, LocationItem, Mission } from '../consts';
import { Game } from '../../../classes';
import { useLocationItems } from './useLocationItems';
import { useEffect, useState } from 'react';
import { IFormValues } from '../../../hooks/useForm/useForm';
import { useHintsValidator } from './useHintsValidator';

export const useGame = () => {
  const { selectedItems } = useLocationItems();
  const { isHintsValid } = useHintsValidator();
  const [isMissingHints, setIsMissingHints] = useState<boolean>(false);
  useEffect(() => {}, [selectedItems, isMissingHints]);
  const game: Game | undefined = new Game(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );
  enum GAMES_STATUS {
    // @ts-ignore
    VALID = true,
    // @ts-ignore
    NOT_VALID = false,
  }
  const getGameId = (): Promise<string> => {
    return fetch('https://api.kanye.rest/')
      .then((response) => response.json())
      .then((data) => data.quote);
  };
  const handleGameCreation = (
    selectedItems: LocationItem[],
    formValues: IFormValues
  ): GAMES_STATUS => {
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
      return GAMES_STATUS.VALID; // todo - server will generate gameId which later could be called with GET
    } else {
      setIsMissingHints(true);
      return GAMES_STATUS.NOT_VALID;
    }
  };

  return {
    handleGameCreation,
    isMissingHints,
  };
};

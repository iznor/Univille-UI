import { GameSettings, LocationItem, Mission } from '../consts';
import { Game } from '../../../classes';
import { useLocationItems } from './useLocationItems';
import { useEffect, useState } from 'react';

export const useGame = () => {
  const { selectedItems } = useLocationItems();
  const [isGameReady, setIsGameReady] = useState<boolean>(false);
  const game: Game | undefined = new Game(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );
  const handleGameCreation = (selectedItems: LocationItem[]) => {
    const gameMissions: Mission[] = [];
    selectedItems.forEach((item: LocationItem) => {
      gameMissions.push({
        unityObjectTag: item.unityObjectTag,
        hint: item.hint,
      });
    });

    // todo:
    //  game.setGameId(gameId)
    //  game.setMissions(gameMissions);
    //  game.setTimeLimitMinutes(timeLimit);
    //  game.setStartTimeEpoch(startTime);
    //  game.setNumberOfGroups(numberOfGroups)
    //  game.setGameName(gameName);
    game.setMissions(gameMissions);
    setIsGameReady(true);
    console.log(JSON.stringify(game)); // dev - sanity check (to be removed)
  };
  useEffect(() => {}, [selectedItems, isGameReady]);

  return { handleGameCreation, isGameReady };
};

import { Box, Card, CardContent } from '@mui/material';
import { H1, H3, Row } from '../../../components';
import Button from '@mui/material/Button';
import React, { Dispatch, SetStateAction } from 'react';

type GameStartProps = {
  gameId: string;
  timer: number;
  startTimer: () => void;
  gameStarted: boolean;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
};
export const GameStart = (props: GameStartProps) => {
  const { gameId, timer, startTimer, gameStarted, setGameStarted } = props;
  return (
    <Box>
      <Card>
        <CardContent>
          <Row>
            <H1>Game is ready</H1>
          </Row>
          <Row sx={{ marginTop: '10px' }}>
            <H3>Game Code: {gameId}</H3>
          </Row>
          {gameStarted ? (
            <>
              <Row sx={{ marginTop: '10px' }}>
                <H3>Timer: {timer}</H3>
              </Row>
            </>
          ) : (
            <Row sx={{ marginTop: '10px' }}>
              <Button
                onClick={() => {
                  // todo - POST onClick timestamp + POST setActive
                  startTimer();
                  setGameStarted(true);
                }}
              >
                <H3>Start Game</H3>
              </Button>
            </Row>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

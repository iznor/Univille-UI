import React from 'react';
import { P } from '../../components';
import { Box } from '@mui/material';
import './GameWizard.scss';
import { LocationSelector } from './LocationSelector';

interface IGameWizard {}

const GameWizard = (props: IGameWizard) => {
  const {} = props;
  return (
    <Box className="game-wizard-wrapper">
      <LocationSelector />
    </Box>
  );
};

export { GameWizard };

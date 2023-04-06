import React, { useEffect, useState } from 'react';
import { P } from '../../components';
import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './GameWizard.scss';
import { LocationSelector } from './LocationSelector';
import { useLocationItems } from './hooks/useLocationItems';
import { LocationItem } from './consts';
import { DeleteTwoTone } from '@mui/icons-material';
import { useStepper } from './hooks/useStepper';

interface IGameWizard {}

const GameWizard = (props: IGameWizard) => {
  // const {} = props;
  const { itemsList, selectedItems, handleSelect, handleRemove } =
    useLocationItems();
  const {
    steps,
    activeStep,
    completed,
    totalSteps,
    completedSteps,
    handleNext,
    handleBack,
    handleComplete,
    handleReset,
    allStepsCompleted,
    handleStep,
  } = useStepper();

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}: {steps[activeStep]}
            </Typography>
            {activeStep === 0 && (
              <>
                <LocationSelector
                  itemsList={itemsList}
                  selectedItems={selectedItems}
                  selectItem={(item: LocationItem) => handleSelect(item)}
                  removeItem={(item: LocationItem) => handleRemove(item)}
                />
                <P>
                  Selected Locations:{' '}
                  {selectedItems.map((item) => (
                    <p>
                      {item.name}{' '}
                      <DeleteTwoTone
                        onClick={() => handleRemove(item)}
                        cursor={'pointer'}
                      />
                    </p>
                  ))}
                </P>
              </>
            )}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  ''
                ) : completedSteps() === totalSteps() - 1 ? (
                  <Button onClick={handleComplete}>Finish</Button>
                ) : (
                  ''
                ))}
            </Box>
          </>
        )}
      </div>
    </Box>
  );
};

export { GameWizard };

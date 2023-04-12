import { useForm } from '../../../hooks';
import { PageWrapper } from '../../Layout';
import { Box, Button, Card } from '@mui/material';
import { Form, H3, P, Row, SelectInput, TextInput } from '../../../components';
import React, { Dispatch, SetStateAction } from 'react';
import {} from '../../../theme/pallet';
import { LocationItem } from '../consts';
import { useGame } from '../hooks';
type SettingsFormProps = {
  selectedItems: LocationItem[];
  setGameReady: Dispatch<SetStateAction<boolean>>;
};
export const SettingsForm = (props: SettingsFormProps) => {
  const { selectedItems, setGameReady } = props;
  const { handleGameCreation /*, setIsGameReady*/ } = useGame();
  const [handleInput, formValues, formIsValid, submitForm] = useForm({
    timeLimit: '',
    numberOfGroups: '',
    classroomName: '',
  });

  const handleSubmit = () => {
    handleGameCreation(selectedItems, formValues) && setGameReady(true);
  };

  return (
    <Card sx={{}}>
      <Form justifyContent="space-between" spacing={2}>
        <H3>Game Settings</H3>
        <Row spacing={2}>
          <TextInput
            name="timeLimit"
            id="timeLimit"
            type="number"
            placeholder="Game Time"
            onValueChange={handleInput}
            value={formValues ? formValues.timeLimit.value : ''}
            errorMsg={formValues ? formValues.timeLimit.error : ''}
            validators={['required']}
            autoComplete={'off'}
            InputProps={{ autoComplete: 'off' }}
          />
          <P sx={{ alignItems: 'center' }}>Minutes</P>
        </Row>
        <TextInput
          name="numberOfGroups"
          id="numberOfGroups"
          type="number"
          placeholder="Number of groups"
          onValueChange={handleInput}
          value={formValues ? formValues.numberOfGroups.value : ''}
          errorMsg={formValues ? formValues.numberOfGroups.error : ''}
          validators={['required']}
          autoComplete={'off'}
          InputProps={{ autoComplete: 'off' }}
        />
        <TextInput
          name="classroomName"
          id="classroomName"
          type="string"
          placeholder="Class name"
          onValueChange={handleInput}
          value={formValues ? formValues.classroomName.value : ''}
          errorMsg={formValues ? formValues.classroomName.error : ''}
          validators={['required']}
          autoComplete={'off'}
          InputProps={{ autoComplete: 'off' }}
        />
        <Button
          disabled={!formIsValid}
          onClick={() => handleSubmit()}
          variant={'contained'}
          color={'primary'}
        >
          <P>Finish</P>
        </Button>
      </Form>
    </Card>
  );
};

import { makeStyles } from 'tss-react/mui';
import { PageWrapper } from '../Layout';
import { Form, H3, H4, P, Row, SelectInput, TextInput } from 'components';
import React from 'react';
import { useForm } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { Button, Card, Select } from '@mui/material';

const schools = [
  { value: 'school1', label: 'School 1', id: '1' },
  { value: 'school2', label: 'School 2', id: '2' },
  { value: 'school3', label: 'School 3', id: '3' },
  { value: 'school4', label: 'School 4', id: '4' },
];

interface ISignup {}

const Signup = (props: ISignup) => {
  const {} = props;
  const navigate = useNavigate();
  const [handleInput, formValues, formIsValid, submitForm] = useForm({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    school: '',
  });

  const navigateToLogin = () => {
    navigate('/login');
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    submitForm((vals) => console.log(vals));
  };
  return (
    <PageWrapper>
      <Card sx={{}}>
        <Form justifyContent="space-between" spacing={2}>
          <H3>Signup</H3>
          <P>Register to manage your account</P>
          <Row spacing={1}>
            <TextInput
              name="firstname"
              id="firstname"
              placeholder="Your first name.."
              onValueChange={handleInput}
              value={formValues ? formValues.firstname.value : ''}
              errorMsg={formValues ? formValues.firstname.error : ''}
              validators={['required']}
            />
            <TextInput
              name="lastname"
              id="lastname"
              placeholder="Your last name.."
              onValueChange={handleInput}
              value={formValues ? formValues.lastname.value : ''}
              errorMsg={formValues ? formValues.lastname.error : ''}
              validators={['required']}
            />
          </Row>
          <TextInput
            name="email"
            id="email"
            placeholder="Your email.."
            onValueChange={handleInput}
            value={formValues ? formValues.email.value : ''}
            errorMsg={formValues ? formValues.email.error : ''}
            validators={['required', 'email']}
          />
          <TextInput
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            onValueChange={handleInput}
            value={formValues ? formValues.password.value : ''}
            errorMsg={formValues ? formValues.password.error : ''}
            validators={['required', 'password']}
          />
          <TextInput
            name="confirmpassword"
            id="confirmpassword"
            type="password"
            placeholder="Confirm password"
            onValueChange={handleInput}
            value={formValues ? formValues.confirmpassword.value : ''}
            errorMsg={formValues ? formValues.confirmpassword.error : ''}
            validators={['required', 'confirmPassword']}
          />
          {/* select school from list */}
          {/* <Select label="Select your school"> */}
          {/*   {schools.map((school) => ( */}
          {/*     <option key={school.id} value={school.value}> */}
          {/*       {school.label} */}
          {/*     </option> */}
          {/*   ))} */}
          {/* </Select> */}

          <SelectInput
            options={schools}
            onValueChange={handleInput}
            value={formValues ? formValues.school.value : ''}
            errorMsg={formValues ? formValues.school.error : ''}
            validators={['required']}
            label={'Select your school'}
          />

          <Button
            disabled={!formIsValid}
            onClick={handleSubmitClick}
            variant={'contained'}
            color={'primary'}
          >
            <P>Signup</P>
          </Button>
        </Form>
        <Button color={'secondary'}>
          <P onClick={navigateToLogin}>Already have an account? Login</P>
        </Button>
      </Card>
    </PageWrapper>
  );
};
const useStyles = makeStyles()((theme) => ({
  root: {},
}));
export { Signup };

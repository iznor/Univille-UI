import { PageWrapper } from '../Layout';
import { Button, Card } from '@mui/material';
import { Form, H3, P, Row, TextInput } from '../../components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useUser } from '../../store';
interface ILogin {}

const Login = (props: ILogin) => {
  const {} = props;
  const { userActions, userState } = useUser();
  const navigate = useNavigate();
  const [handleInput, formValues, formIsValid, submitForm] = useForm({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (userState.isAuth) {
      navigateToHome();
    }
  }, [userState.isAuth]);

  const navigateToHome = () => {
    navigate('/home');
  };
  const navigateToSignup = () => {
    navigate('/signup');
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    submitForm((vals) => {
      console.log(vals);
      userActions.logIn(vals.email, vals.password);
    });
  };
  return (
    <PageWrapper>
      <Card sx={{}}>
        <Form justifyContent="space-between" spacing={2}>
          <H3>Login</H3>
          <P>Login to access your account</P>
          <TextInput
            name="email"
            id="email"
            placeholder="Your email.."
            onValueChange={handleInput}
            value={formValues ? formValues.email.value : ''}
            errorMsg={formValues ? formValues.email.error : ''}
            validators={['required']}
          />
          <TextInput
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            onValueChange={handleInput}
            value={formValues ? formValues.password.value : ''}
            errorMsg={formValues ? formValues.password.error : ''}
            validators={['required']}
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
          <P onClick={navigateToSignup}>Don't have an account? Signup</P>
        </Button>
      </Card>
    </PageWrapper>
  );
};

export { Login };

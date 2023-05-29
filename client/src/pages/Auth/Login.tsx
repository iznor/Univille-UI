import { PageWrapper } from '../Layout';
import { Button, Card } from '@mui/material';
import { Form, H3, P, Row, TextInput } from '../../components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import {useUi, useUser} from '../../store';
import {makeStyles} from 'tss-react/mui';
import {useTranslation} from "react-i18next";
interface ILogin {}

const Login = (props: ILogin) => {
  const {} = props;
  const { userActions, userState } = useUser();
  const {uiActions, uiState} = useUi();
  const navigate = useNavigate();
  const { classes, cx } = useStyles();
  const {t} = useTranslation();
  const [handleInput, formValues, formIsValid, submitForm] = useForm({
    email: '',
    password: '',
  });
  useEffect(() => {
    uiActions.setPage("signup")
  },[])
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
      userActions.logIn(vals.email.toLowerCase(), vals.password);
    });
  };
  return (
    <PageWrapper>
      <Card className={cx(classes.root)}>
        <Form justifyContent="space-between" spacing={2}>
          <H3>{t('signup.title')}</H3>
          <P>{t('signup.subtitle')}</P>
          <TextInput
            name="email"
            id="email"
            placeholder={t('signup.email')}
            onValueChange={handleInput}
            value={formValues ? formValues.email.value : ''}
            errorMsg={formValues ? formValues.email.error : ''}
            validators={['required']}
          />
          <TextInput
            name="password"
            id="password"
            type="password"
            placeholder={t('signup.password')}
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
            <P>{t('signup.button')}</P>
          </Button>
        </Form>
        <Button color={'secondary'}>
          <P onClick={navigateToSignup}>{t('signup.switch')}</P>
        </Button>
      </Card>
    </PageWrapper>
  );
};
const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.app.cardBg
  }
}))

export { Login };

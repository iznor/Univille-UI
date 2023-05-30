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
    uiActions.setPage("login")
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
    <PageWrapper page={"Login"}>
      <Card className={cx(classes.root)} >
        <Form justifyContent="space-between" spacing={2}>
          <H3>{t('login.title')}</H3>
          <P>{t('login.subtitle')}</P>
          <TextInput
            name="email"
            id="email"
            placeholder={t('login.email')}
            onValueChange={handleInput}
            value={formValues ? formValues.email.value : ''}
            errorMsg={formValues ? formValues.email.error : ''}
            validators={['required']}
          />
          <TextInput
            name="password"
            id="password"
            type="password"
            placeholder={t('login.password')}
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
            <P>{t('login.button')}</P>
          </Button>
        </Form>
        <Button color={'primary'} onClick={navigateToSignup}>
          <P sx={{color:"primary.main"}}>{t('login.switch')}</P>
        </Button>
      </Card>
    </PageWrapper>
  );
};
const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.app.cardBg,
    [theme.breakpoints.up('xs')]: {
        width: '80%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
    },

  }
}))

export { Login };

import {makeStyles} from 'tss-react/mui';
import {PageWrapper} from '../Layout';
import {Form, H3, H4, P, Row, SelectInput, TextInput} from '../../components';
import React, {useEffect, useMemo} from 'react';
import {useForm} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {Container} from '@mui/system';
import {Button, Card, Select} from '@mui/material';
import {useData, useUi, useUser} from '../../store';
import {useTranslation} from "react-i18next";

// const schools = [
//   { value: 'school1', label: 'School 1', id: '1' },
//   { value: 'school2', label: 'School 2', id: '2' },
//   { value: 'school3', label: 'School 3', id: '3' },
//   { value: 'school4', label: 'School 4', id: '4' },
// ];

interface ISignup {
}

const Signup = (props: ISignup) => {
    const {} = props;
    const {uiActions, uiState} = useUi();
    const {userActions, userState} = useUser();
    const {dataActions, dataState} = useData();
    const {t} = useTranslation();
    const { classes, cx } = useStyles();
    useEffect(() => {
        dataActions.getSchools();
    }, []);
    useEffect(() => {
        if (userState.signedUp) {
            navigateToLogin();
        }
    }, [userState.signedUp]);
    useEffect(() => {
        uiActions.setPage("signup")
    },[])
    const schools = useMemo(() => {
        return dataState.schools.map((school) => {
            return {value: school._id, label: school.name, id: school._id};
        });
    }, [dataState.schools])

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
        submitForm((vals) => {
            console.log(vals);
            userActions.signup(
                vals.firstname,
                vals.lastname,
                vals.email.toLowerCase(),
                vals.password,
                vals.school
            );
        });
    };
    return (
        <PageWrapper>
            <Card className={cx(classes.root)}>
                <Form justifyContent="space-between" spacing={2}>
                    <H3>{t('signup.title')}</H3>
                    <P>{t('signup.subtitle')}</P>
                    <Row spacing={2}>
                        <TextInput
                            name="firstname"
                            id="firstname"
                            placeholder={t('signup.firstname')}
                            onValueChange={handleInput}
                            value={formValues ? formValues.firstname.value : ''}
                            errorMsg={formValues ? formValues.firstname.error : ''}
                            validators={['required']}
                        />
                        <TextInput
                            name="lastname"
                            id="lastname"
                            placeholder={t('signup.lastname')}
                            onValueChange={handleInput}
                            value={formValues ? formValues.lastname.value : ''}
                            errorMsg={formValues ? formValues.lastname.error : ''}
                            validators={['required']}
                        />
                    </Row>
                    <TextInput
                        name="email"
                        id="email"
                        placeholder={t('signup.email')}
                        onValueChange={handleInput}
                        value={formValues ? formValues.email.value : ''}
                        errorMsg={formValues ? formValues.email.error : ''}
                        validators={['required', 'email']}
                    />
                    <TextInput
                        name="password"
                        id="password"
                        type="password"
                        placeholder={t('signup.password')}
                        onValueChange={handleInput}
                        value={formValues ? formValues.password.value : ''}
                        errorMsg={formValues ? formValues.password.error : ''}
                        validators={['required', 'password']}
                    />
                    <TextInput
                        name="confirmpassword"
                        id="confirmpassword"
                        type="password"
                        placeholder={t('signup.confirm')}
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
                        name="school"
                        options={schools}
                        onValueChange={handleInput}
                        value={formValues ? formValues.school.value : ''}
                        errorMsg={formValues ? formValues.school.error : ''}
                        validators={['required']}
                        label={t('signup.school')}
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
                    <P onClick={navigateToLogin}>{t('signup.switch')}</P>
                </Button>
            </Card>
        </PageWrapper>
    );
};
const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.app.cardBg
    }
}));
export {Signup};

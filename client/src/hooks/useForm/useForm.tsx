import React, { useEffect, useState } from 'react';
import { formValidators } from './formValidators';

export const useForm = (initialValues: Record<string, string>) => {
  const [formValues, setFormValues] = useState<IFormValues | null>(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const setValues = (vals, reset = false) => {
    const values = {};
    Object.keys(vals).forEach((key) => {
      values[key] = {
        value: reset ? '' : vals[key],
        error: '',
        hasError: vals[key] === '',
      };
    });
    setFormValues(values);
  };

  useEffect(() => {
    setValues(initialValues);
  }, []);

  const setValue = (name, value, fieldName) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        [fieldName]: value,
        hasError: fieldName === 'error' && value !== '',
      },
    }));
  };

  const checkFormValidity = () => {
    let isFormValid = true;
    Object.keys(formValues).forEach((key) => {
      if (key !== 'id') {
        isFormValid &&= !formValues[key].hasError;
      }
    });
    setFormIsValid(isFormValid);
    return isFormValid;
  };

  const validate = (name: string, value: string, validators: string[]) => {
    let message = '';
    if (validators.includes('required')) {
      message = formValidators.required(value);
    }

    if (validators.includes('number') && message === '') {
      message = formValidators.number(value);
    }

    if (validators.includes('url') && message === '') {
      message = formValidators.url(value);
    }

    if (validators.includes('email') && message === '') {
      message = formValidators.email(value);
    }

    if (validators.includes('password') && message === '') {
      message = formValidators.password(value);
    }

    if (validators.includes('confirmPassword') && message === '') {
      message = formValidators.confirmPassword(
        value,
        formValues.confirmpassword.value
      );
    }

    setValue(name, message, 'error');
    checkFormValidity();
  };

  const handleInput: IHandleInput = (
    { target: { name, value } },
    validators
  ) => {
    setValue(name, value, 'value');
    validate(name, value, validators);
  };

  const submitForm: ISubmitForm = (submitCallback, reset = true) => {
    if (checkFormValidity()) {
      const values = {};
      Object.keys(formValues).forEach((key) => {
        values[key] = formValues[key].value;
      });

      submitCallback(values);
      setValues(reset ? initialValues : values, reset);
    }
  };

  return [handleInput, formValues, formIsValid, submitForm] as const;
};

interface IFormValue {
  value: string;
  error: string;
  hasError: boolean;
}

export interface IFormValues {
  [key: string]: IFormValue;
}

type IHandleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  validators: string[]
) => void;

type ISubmitForm = (
  submitCallback: (values: Record<string, string>) => void,
  reset?: boolean
) => void;

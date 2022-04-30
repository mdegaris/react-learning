import React from 'react';
import { postcodeValidator } from 'postcode-validator';
import Input from '../../UI/Input/Input';
import useInput from '../../../hooks/use-input';
import styles from './CheckoutForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isValidPostcode = (value) => postcodeValidator(value, 'GB');

const CheckoutForm = () => {
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput(isNotEmpty);

  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);

  const {
    value: postCodeValue,
    isValid: postCodeIsValid,
    hasError: postCodeHasError,
    valueChangeHandler: postCodeChangeHandler,
    inputBlurHandler: postCodeBlurHandler,
    reset: resetPostCode,
  } = useInput(isValidPostcode);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);

  const fullNameClasses = fullNameHasError ? styles.error : '';
  const streetClasses = streetHasError ? styles.error : '';
  const postCodeClasses = postCodeHasError ? styles.error : '';
  const cityClasses = cityHasError ? styles.error : '';

  return (
    <form>
      <Input
        className={fullNameClasses}
        label='Full Name'
        input={{
          type: 'text',
          value: fullNameValue,
          onChange: fullNameChangeHandler,
          onBlur: fullNameBlurHandler,
        }}
      />
      <Input
        className={streetClasses}
        label='Street'
        input={{
          type: 'text',
          value: streetValue,
          onChange: streetChangeHandler,
          onBlur: streetBlurHandler,
        }}
      />
      <Input
        className={postCodeClasses}
        label='Postal Code'
        input={{
          type: 'text',
          value: postCodeValue,
          onChange: postCodeChangeHandler,
          onBlur: postCodeBlurHandler,
        }}
      />
      <Input
        className={cityClasses}
        label='City'
        input={{
          type: 'text',
          value: cityValue,
          onChange: cityChangeHandler,
          onBlur: cityBlurHandler,
        }}
      />
    </form>
  );
};

export default CheckoutForm;

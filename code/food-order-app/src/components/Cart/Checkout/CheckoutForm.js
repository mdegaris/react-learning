import { useContext } from 'react';
import { postcodeValidator } from 'postcode-validator';

import Input from '../../UI/Input/Input';
import useInput from '../../../hooks/use-input';
import useHttp from '../../../hooks/use-http';
import Config from '../../../config/config-options';
import CartContext from '../../../store/cart-context';
import styles from './CheckoutForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isValidPostcode = (value) => postcodeValidator(value, 'GB');

const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};

const buildOrder = (cartItems, customer, totalPrice) => {
  return {
    id: generateId(),
    customer: {
      fullName: customer.fullName,
      street: customer.street,
      postCode: customer.postCode,
      city: customer.city,
    },
    orderedItems: cartItems.map((item) => {
      return {
        mealId: item.id,
        name: item.name,
        amount: item.amount,
        unitPrice: item.price,
      };
    }),
    orderPrice: totalPrice,
  };
};

const CheckoutForm = () => {
  const cartCtx = useContext(CartContext);

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

  const { isLoading, error: postError, sendRequest: postOrder } = useHttp();

  const fullNameClasses = fullNameHasError ? styles.error : '';
  const streetClasses = streetHasError ? styles.error : '';
  const postCodeClasses = postCodeHasError ? styles.error : '';
  const cityClasses = cityHasError ? styles.error : '';

  const isFormValid =
    fullNameIsValid && streetIsValid && postCodeIsValid && cityIsValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log('Place Order...');

    const customer = {
      name: fullNameValue,
      street: streetValue,
      postCode: postCodeValue,
      city: cityValue,
    };

    postOrder({
      method: 'POST',
      url: Config.ORDER_POST_URL,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: buildOrder(cartCtx.cartItems, customer, cartCtx.totalPrice),
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
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
      <button>Order</button>
    </form>
  );
};

export default CheckoutForm;

import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import InputErrorDialog from './InputErrorDialog';
import styles from './AddUserForm.module.css';

const AddUserForm = ({ addUserHandler }) => {
    const [inputError, setInputError] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const clearInputError = () => {
        setInputError('');
    };

    const resetForm = () => {
        clearInputError();
        setEnteredName('');
        setEnteredAge('');
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length === 0) {
            setInputError('Username cannot be empty');
            return;
        }

        if (enteredAge.trim().length === 0) {
            setInputError('Age cannot be empty');
            return;
        }

        if (enteredAge <= 0) {
            setInputError('Age needs to be >0');
            return;
        }

        addUserHandler(enteredName, enteredAge);
        resetForm();
    };

    const onChangeNameHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const onChangeAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <div>
            {inputError && (
                <InputErrorDialog
                    clearError={clearInputError}
                    message={inputError}
                />
            )}
            <Card>
                <form className={styles.form}>
                    <div className={styles.input}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={enteredName}
                            onChange={onChangeNameHandler}
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            type="number"
                            value={enteredAge}
                            onChange={onChangeAgeHandler}
                        />
                    </div>
                    <Button type="submit" onClick={submitHandler}>
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUserForm;

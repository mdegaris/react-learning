import React from 'react';
import Dialog from '../UI/Dialog/Dialog';

const InputErrorDialog = ({ clearError, message }) => {
    return (
        <Dialog onOkay={clearError} title="Input Error">
            {message}
        </Dialog>
    );
};

export default InputErrorDialog;

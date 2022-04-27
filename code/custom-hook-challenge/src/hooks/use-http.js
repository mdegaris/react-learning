import { useState, useCallback } from 'react';

const URL = 'https://test-35d7f-default-rtdb.firebaseio.com/tasks.json';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, processData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(URL, requestConfig);

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            processData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }

        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;

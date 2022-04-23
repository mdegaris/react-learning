import { useState, useEffect } from 'react';

const URL = 'https://test-35d7f-default-rtdb.firebaseio.com/tasks.json';

export const ACTION = {
    GET: 'GET',
    POST: 'POST',
};

const useFetch = async (action, payload = null) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    setIsLoading(true);
    setError(null);

    try {
        const response = await fetch(URL);
        let loadedTasks = null;
        let createdTask = null;

                {
                    method: 'POST',
                    body: JSON.stringify({ text: taskText }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

        if (ACTION.GET) {
            loadedTasks = [];
            for (const taskKey in data) {
                loadedTasks.push({
                    id: taskKey,
                    text: data[taskKey].text,
                });
            }

            // setTasks(loadedTasks);
        } else if (ACTION.POST) {
            const generatedId = data.name; // firebase-specific => "name" contains generated id
            createdTask = {
                id: generatedId,
                text: taskText,
            };
        }
    } catch (err) {
        setError(err.message || 'Something went wrong!');
    }

    setIsLoading(false);
    return [loadedTasks || createdTask, isLoading, error];
};

export default useFetch;

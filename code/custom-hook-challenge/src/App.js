import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
    const [tasks, setTasks] = useState([]);
    const { isLoading, error, sendRequest } = useHttp();

    const loadTasks = useCallback((data) => {
        const loadedTasks = [];
        for (const taskKey in data) {
            loadedTasks.push({
                id: taskKey,
                text: data[taskKey].text,
            });
        }

        setTasks(loadedTasks);
    }, []);

    const fetchTasks = useCallback(async () => {
        await sendRequest(
            {
                method: 'GET',
            },
            loadTasks
        );
    }, [sendRequest, loadTasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={sendRequest}
            />
        </React.Fragment>
    );
}

export default App;

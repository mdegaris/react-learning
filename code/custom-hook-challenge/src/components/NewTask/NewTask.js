import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
    const { isLoading, error, sendRequest } = useHttp();

    const enterTaskHandler = async (taskText) => {
        const addTask = (data) => {
            const generatedId = data.name; // firebase-specific => "name" contains generated id
            const createdTask = {
                id: generatedId,
                text: taskText,
            };

            props.onAddTask(createdTask);
        };

        sendRequest(
            {
                method: 'POST',
                body: JSON.stringify({ text: taskText }),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            addTask
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;

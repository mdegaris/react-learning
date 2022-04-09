import React, { useState } from 'react';
import AddUserForm from './components/Users/AddUserForm';
import UserList from './components/Users/UserList';

const App = () => {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (name, age) => {
        setUserList([...userList, { name: name, age: age }]);
    };

    return (
        <main>
            <AddUserForm addUserHandler={addUserHandler} />
            <UserList userList={userList} />
        </main>
    );
};

export default App;

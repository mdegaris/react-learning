import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchList = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://remote-list-demo-default-rtdb.firebaseio.com/list.json'
    );
    const responseData = await response.json();

    console.log(responseData.toString());

    const loadedList = [];
    for (const key in responseData) {
      console.log(key);
      loadedList.push(key);
    }

    setIsLoading(false);
    setList(responseData);
  };

  useEffect(() => {
    const reload = setInterval(() => {
      fetchList();
    }, 10000);

    return () => {
      clearInterval(reload);
    };
  }, []);

  return (
    <div className='App'>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

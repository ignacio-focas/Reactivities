import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const apiUrl = "http://localhost:7092/api/activities";

  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get(apiUrl).then(response=>{
      setActivities(response.data);
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {activities.map((a: any) => (
            <li key={a.id}>
              {a.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

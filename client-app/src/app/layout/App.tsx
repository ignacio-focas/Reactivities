import React, {useState, useEffect} from 'react';
import { List, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Activity } from './../models/activity';

function App() {

  const apiUrl = "http://localhost:7092/api/activities";

  const [activities, setActivities] = useState<Array<Activity>>([]);

  useEffect(()=>{
    axios.get<Array<Activity>>(apiUrl).then(response=>{
      setActivities(response.data);
    })
  },[])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
        <List>
          {activities.map((a) => (
            <List.Item key={a.id}>
              {a.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;

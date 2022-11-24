import React, {useState, useEffect} from 'react';
import { List, Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Activity } from './../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from './../../features/activities/dashboard/ActivityDashboard';


function App() {

  const apiUrl = "http://localhost:7092/api/activities";

  const [activities, setActivities] = useState<Array<Activity>>([]);

  useEffect(()=>{
    axios.get<Array<Activity>>(apiUrl).then(response=>{
      setActivities(response.data);
    })
  },[])

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}} >
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;

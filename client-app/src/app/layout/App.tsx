import React, {useState, useEffect} from 'react';
import { List, Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Activity } from './../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from './../../features/activities/dashboard/ActivityDashboard';


function App() {

  const apiUrl = "http://localhost:7092/api/activities";

  const [activities, setActivities] = useState<Array<Activity>>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(()=>{
    axios.get<Array<Activity>>(apiUrl).then(response=>{
      setActivities(response.data);
    })
  },[])

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(a=>a.id === id));
  }

  function handleCancelSelectActivity(){
    setSelectedActivity(undefined);
  }

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}} >
        <ActivityDashboard 
          activities={activities} 
          selectedActivity={selectedActivity}
          selectActivity = {handleSelectActivity}
          cancelSelectActivity = {handleCancelSelectActivity} />
      </Container>
    </>
  );
}

export default App;

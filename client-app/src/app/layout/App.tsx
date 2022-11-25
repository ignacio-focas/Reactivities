import React, {useState, useEffect} from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { Activity } from './../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from './../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';


function App() {

  const apiUrl = "http://localhost:7092/api/activities";

  const [activities, setActivities] = useState<Array<Activity>>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

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

  function handleFormOpen(id?:string){
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity){
    activity.id ? setActivities([...activities.filter(x=>x.id!== activity.id), activity])
    : setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x=>x.id !==id)])
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}} >
        <ActivityDashboard 
          activities={activities} 
          selectedActivity={selectedActivity}
          onSelectActivity = {handleSelectActivity}
          cancelSelectActivity = {handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          onDeleteActivity={handleDeleteActivity}
           />
      </Container>
    </>
  );
}

export default App;

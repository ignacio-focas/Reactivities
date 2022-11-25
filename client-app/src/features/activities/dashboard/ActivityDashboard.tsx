import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from './../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from './../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Array<Activity>
    selectedActivity: Activity | undefined
    onSelectActivity:(id:string)=> void
    cancelSelectActivity: () => void
    editMode : boolean
    openForm : (id : string) => void
    closeForm: () => void,
    createOrEdit: (activity: Activity)=>void
    onDeleteActivity: (id: string) => void
    submitting: boolean
}

export default function ActivityDashboard({activities, onSelectActivity, selectedActivity, 
        cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, onDeleteActivity, submitting}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
              <ActivityList activities={activities} onSelectActivity={onSelectActivity} onDeleteActivity={onDeleteActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
              {selectedActivity && !editMode &&
              <ActivityDetails 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity} 
                openForm={openForm}
                /> }
                {editMode &&
              <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} submitting={submitting}/>}
            </Grid.Column>
        </Grid>
    )
}

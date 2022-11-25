import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from './../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from './../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from './../../../app/stores/store';
import { observer } from 'mobx-react-lite';

interface Props {
    activities: Array<Activity>
    createOrEdit: (activity: Activity)=>void
    onDeleteActivity: (id: string) => void
    submitting: boolean
}

export default observer( function ActivityDashboard({activities, createOrEdit, onDeleteActivity, submitting}: Props){

  const {activityStore} = useStore();
  const {selectedActivity, editMode} = activityStore

    return(
        <Grid>
            <Grid.Column width='10'>
              <ActivityList activities={activities} onDeleteActivity={onDeleteActivity} submitting={submitting} />
            </Grid.Column>
            <Grid.Column width='6'>
              {selectedActivity && !editMode &&
              <ActivityDetails /> }
                {editMode &&
              <ActivityForm createOrEdit={createOrEdit} submitting={submitting}/>}
            </Grid.Column>
        </Grid>
    )
}
)
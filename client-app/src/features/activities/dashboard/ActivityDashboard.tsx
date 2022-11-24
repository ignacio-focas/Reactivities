import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from './../../../app/models/activity';

interface Props {
    activities: Array<Activity>
}

export default function ActivityDashboard({activities}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
            <List>
          {activities.map((a) => (
            <List.Item key={a.id}>
              {a.title}
            </List.Item>
          ))}
        </List>
            </Grid.Column>
        </Grid>
    )
}

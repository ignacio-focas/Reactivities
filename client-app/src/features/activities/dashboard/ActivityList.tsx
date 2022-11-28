import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

export default observer(function ActivityList() {

    const {activityStore} = useStore();
    const {groupedActivities} = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities])=>(
                <Fragment key={group} >
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    <Segment>
                        <Item.Group divided>
                            {activities.map(a=>(
                            <ActivityListItem key={a.id} activity={a} />
                            ))}
                         </Item.Group>
                    </Segment>
                </Fragment>
            ))}

        </>

    )
}
)
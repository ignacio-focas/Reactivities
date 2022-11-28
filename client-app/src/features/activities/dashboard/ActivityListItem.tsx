import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { useStore } from '../../../app/stores/store'


interface Props {
    activity : Activity
}

export default function ActivityListItem({activity: a} : Props){

    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: React.MouseEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    
    return(
        <Item key={a.id}>
                        <Item.Content>
                            <Item.Header as='a'>{a.title}</Item.Header>
                            <Item.Meta>{a.date}</Item.Meta>
                            <Item.Description>
                                <div>{a.description}</div>
                                <div>{a.city}, {a.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/activities/${a.id}`} floated='right' content='View' color='blue' />
                                <Button
                                     name={a.id}
                                     loading={loading && target===a.id} 
                                     onClick={(e)=>handleActivityDelete(e, a.id)} 
                                     floated='right' content='Delete' 
                                     color='red' />
                                <Label basic content={a.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
    )
}
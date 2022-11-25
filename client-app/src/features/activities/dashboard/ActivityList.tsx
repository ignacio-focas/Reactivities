import React, {useState} from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from './../../../app/models/activity';

interface Props{
    activities: Array<Activity>
    onSelectActivity: (id:string) => void
    onDeleteActivity: (id:string) => void
    submitting: boolean
}

export default function ActivityList({activities, onSelectActivity, onDeleteActivity, submitting} : Props) {

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: React.MouseEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        onDeleteActivity(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(a=>(
                    <Item key={a.id}>
                        <Item.Content>
                            <Item.Header as='a'>{a.title}</Item.Header>
                            <Item.Meta>{a.date}</Item.Meta>
                            <Item.Description>
                                <div>{a.description}</div>
                                <div>{a.city}, {a.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=>onSelectActivity(a.id)} floated='right' content='View' color='blue' />
                                <Button
                                     name={a.id}
                                     loading={submitting && target===a.id} 
                                     onClick={(e)=>handleActivityDelete(e, a.id)} 
                                     floated='right' content='Delete' 
                                     color='red' />
                                <Label basic content={a.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

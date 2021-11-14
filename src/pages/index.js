/* eslint-disable @next/next/no-img-element */

import {Button, Card, Container,Grid } from 'semantic-ui-react';
import { useRouter } from 'next/router';


export default function HomePage({tasks}) { 

  const router = useRouter( )

  if (tasks.length === 0) return (
    <Grid centered verticalAlign="middle" columns="1" style={{heigth: "80vh"}}>
      <Grid.Row>
       <Grid.Column textAlign="center">
      <h1>There are no task</h1>
      <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqQ8HYHnqyPVQaT2dv_3vNqu7tQ4VTRAr2A&usqp=CAU" 
      alt="No data found"/>
      <div>
        <Button primary>
          Create a Task
        </Button>
      </div>
      </Grid.Column> 
      </Grid.Row>
    </Grid>
  )

  return (
    <Container style={{padding: "20px"}}>
     <Card.Group itemsPerRow={4}>
    {
      tasks.map(task => (
        <Card key={task._id}>
          <Card.Content>
            <Card.Header>{task.title}</Card.Header>
            <p>{task.description}</p>
          </Card.Content>
          <Card.Content extra>
            <Button primary onClick={() => router.push(`/tasks/${task._id}`)}>View</Button>
            <Button secondary onClick={() => router.push(`/tasks/${task._id}/edit`)}>Edit</Button>
          </Card.Content>
        </Card>
      ))
    }   
    </Card.Group> 
    </Container>
  )

}

export const getServerSideProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/tasks');
    const tasks = await res.json();

    return {
      props: {
        tasks,
      }
    }
}

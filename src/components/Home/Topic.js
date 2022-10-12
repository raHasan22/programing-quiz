import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Topic = ({topics}) => {
    const {name, logo} = topics;
    return (
        <div>
        <Card className='shadow-lg' bg="dark" style={{ width: '16rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
            <Card.Title className='text-light'>{name}</Card.Title>
            <Card.Text className='text-light'>
            To start the quiz click on this button
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
    );
};

export default Topic;
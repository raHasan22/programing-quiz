import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';
import './home.css'

const Home = () => {
    const details = useLoaderData();
    const {data} = details;
    return (
        <Container className='my-4'>
            <div className='my-3'>
                <h2>Choose a topic to start quiz</h2>
            </div>
            <div className='cards'>
            {
                data.map(topics => <Topic
                    key={topics.id}
                    topics={topics}
                ></Topic>)
            }
            </div>
        </Container>
    );
};

export default Home;
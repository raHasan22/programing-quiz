import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../Singlequestion/SingleQuestion';

const Quiz = () => {
    const quiz = useLoaderData();
    const {data} = quiz;
    const {questions} = data;
    const radioHandler = (value, value1) =>{
        console.log(value, value1)
        if(value===value1){
            alert("Correct answer");
        }
        else{
            alert("Wrong answer");
        }
    }
    return (
        <Container>
        <div>
            <h3>Answer the Quiz about {data.name}</h3>
            <div>
                {questions.map(oneQuestion => <SingleQuestion
                key={oneQuestion.id}
                oneQuestion={oneQuestion}
                radioHandler={radioHandler}   
                ></SingleQuestion>)}
            </div>
        </div>
        </Container>
    );
};

export default Quiz;
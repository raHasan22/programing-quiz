import React from 'react';
import { Container } from 'react-bootstrap';

const SingleQuestion = ({oneQuestion}) => {
    console.log(typeof(oneQuestion));
    const {id, question, options} = oneQuestion;
    return (
        <div>
            <div>
                Question: {question.slice(3,-4)} 
            </div>
            <div>
                <input type="radio" value={options[0]} name={id} /> {options[0]}
                <input type="radio" value={options[1]} name={id} /> {options[1]}
                <input type="radio" value={options[2]} name={id} /> {options[2]}
                <input type="radio" value={options[3]} name={id} /> {options[3]}
            </div>
        </div>
    );
};

export default SingleQuestion;
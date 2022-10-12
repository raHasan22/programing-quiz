import React from 'react';
import './SingleQuestion.css';

const SingleQuestion = ({oneQuestion}) => {
    const {id, question, options} = oneQuestion;
    return (
        <div className='one-qs shadow'>
            <div>
                <h4>Question: {question.slice(3,-4)}</h4>
            </div>
            <div className='answers'>
                <input type="radio" value={options[0]} name={id} /> {options[0]} <br></br>
                <input type="radio" value={options[1]} name={id} /> {options[1]} <br></br>
                <input type="radio" value={options[2]} name={id} /> {options[2]} <br></br>
                <input type="radio" value={options[3]} name={id} /> {options[3]? options[3]: 'None'}
            </div>
        </div>
    );
};

export default SingleQuestion;
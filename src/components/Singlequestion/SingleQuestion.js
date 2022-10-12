import React from 'react';
import './SingleQuestion.css';

const SingleQuestion = ({oneQuestion, radioHandler}) => {
    const {id, question, options, correctAnswer} = oneQuestion;
    return (
        <div className='one-qs shadow'>
            <div>
                <h4>Question: {question.slice(3,-4)}</h4>
            </div>
            <div className='answers'>
                <input type="radio" value={options[0]} name={id} onClick={()=> radioHandler(options[0], correctAnswer)} /> {options[0]} <br></br>
                <input type="radio" value={options[1]} name={id} onClick={()=> radioHandler(options[1], correctAnswer)} /> {options[1]} <br></br>
                <input type="radio" value={options[2]} name={id} onClick={()=> radioHandler(options[2], correctAnswer)}/> {options[2]} <br></br>
                <input type="radio" value={options[3]? options[3]:'None' } name={id} onClick={()=> radioHandler(options[3]? options[3]:'None', correctAnswer)}/> {options[3]? options[3]: 'None'}
            </div>
        </div>
    );
};

export default SingleQuestion;
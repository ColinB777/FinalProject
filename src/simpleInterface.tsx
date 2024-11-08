import React, { useState } from 'react';
import './SimpleQuestions/simple.css';
import './progressBar.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


export function SimpleInterface(): React.JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    const firstAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    let blankQuestion = false;
    if (firstAnswer === "") {
        blankQuestion = true 
    }

    let val = "0";
    function increaseBar()
    {
        localStorage.setItem('barProg', (parseInt(val) + 10).toString());
    }

    return (
        <div>
        <div>
            <h1>Basic Assessment</h1>
            <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>
            <div className='progressBorder'>
                <div className='progressBar' style={{width: localStorage.getItem('barProg') + "%"}}></div>
            </div>
        </div>
    <div className = "simple_question">        
        <h4>1. I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable.</h4>
                {firstAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`first-${i}`}
                        type="radio"
                        name="firstAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setFirstAnswer(e.target.value);
                        }}
                        checked={firstAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                </div>
                
                <div>You have chosen: {firstAnswer}</div>
                
                
                <footer> <Button disabled={blankQuestion} style={{background:'white',margin:10}} onClick={increaseBar}>
      <Link to="/SimpleQuestions/SecondQuestion">Next Question</Link>
      </Button></footer>
        </div>
        
    );
}
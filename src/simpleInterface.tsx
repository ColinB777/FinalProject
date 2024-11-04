import React, { useState } from 'react';
import './simple.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


export function SimpleInterface(): React.JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    const firstAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    return (
            <div id = "firstSet">
            <h1>Basic Assessment</h1>
            <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>

                <h4>I feel most fulfilled when working on tasks that allow me to be creative and explore new ideas.</h4>
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
                <div>You have chosen: {firstAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/SecondQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}
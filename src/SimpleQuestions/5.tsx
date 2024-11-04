import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../simple.css';

export function FifthQuestion(): React.JSX.Element {
    const [fifthAnswer, setFifthAnswer] = useState<string>("");
    const fourthAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    return (
        <div>
            <div>
                <h1>Basic Assessment</h1>
                <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>
            </div>
        <div className = "simple_question">        
            <h4>5. It’s important to me to have a job that allows me to see tangible results from my efforts.</h4>
                {fourthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`fifth-${i}`}
                        type="radio"
                        name="fifthAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setFifthAnswer(e.target.value);
                        }}
                        checked={fifthAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                </div>
                <div>You have chosen: {fifthAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/SixthQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

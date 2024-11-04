import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../simple.css';
export function FourthQuestion(): React.JSX.Element {
    const [fourthAnswer, setFourthAnswer] = useState<string>("");
    const fourthAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    return (
        <div>
            <div>
                <h1>Basic Assessment</h1>
                <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>
            </div>
        <div className = "simple_question">        
            <h4>4. I enjoy interacting with people throughout my workday and thrive in social work environments.</h4>
                {fourthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`fourth-${i}`}
                        type="radio"
                        name="fourthAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setFourthAnswer(e.target.value);
                        }}
                        checked={fourthAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                </div>
                <div>You have chosen: {fourthAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/FifthQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

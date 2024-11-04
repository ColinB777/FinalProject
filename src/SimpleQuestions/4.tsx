import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './questions.css';
export function FourthQuestion(): React.JSX.Element {
    const [fourthAnswer, setFourthAnswer] = useState<string>("");
    const fourthAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    return (
        <div id = "thirdQues">        
            <h4>I enjoy interacting with people throughout my workday and thrive in social work environments.</h4>
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
                <div>You have chosen: {fourthAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/FifthQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

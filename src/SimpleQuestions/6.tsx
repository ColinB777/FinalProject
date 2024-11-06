import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './simple.css';
export function SixthQuestion(): React.JSX.Element {
    const [sixthAnswer, setSixthAnswer] = useState<string>("");
    const sixthAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    let blankQuestion = false;
    if (sixthAnswer === "") {
        blankQuestion = true 
    }
    return (
        <div>
            <div>
                <h1>Basic Assessment</h1>
                <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>
            </div>
        <div className = "simple_question">        
            <h4>6. I value opportunities to continuously learn and develop new skills within my career.</h4>
                {sixthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`sixth-${i}`}
                        type="radio"
                        name="sixthAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setSixthAnswer(e.target.value);
                        }}
                        checked={sixthAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                </div>
                <div>You have chosen: {sixthAnswer}</div>
                <footer> <Button disabled = {blankQuestion} style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/SeventhQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

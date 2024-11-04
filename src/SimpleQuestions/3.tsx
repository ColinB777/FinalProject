import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../simple.css';

export function ThirdQuestion(): React.JSX.Element {
    const [thirdAnswer, setThirdAnswer] = useState<string>("");
    const thirdAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    return (
        <div>
            <div>
                <h1>Basic Assessment</h1>
                <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>
            </div>
        <div className = "simple_question">        
            <h4>3. I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable.</h4>
                {thirdAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`third-${i}`}
                        type="radio"
                        name="thirdAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setThirdAnswer(e.target.value);
                        }}
                        checked={thirdAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                </div>
                <div>You have chosen: {thirdAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/FourthQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

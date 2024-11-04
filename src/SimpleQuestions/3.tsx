import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './questions.css';
export function ThirdQuestion(): React.JSX.Element {
    const [thirdAnswer, setThirdAnswer] = useState<string>("");
    const thirdAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    return (
        <div id = "thirdQues">        
            <h4>I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable.</h4>
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
                <div>You have chosen: {thirdAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/FourthQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

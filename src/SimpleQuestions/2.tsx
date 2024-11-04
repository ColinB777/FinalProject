import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './questions.css';
export function SecondQuestion(): React.JSX.Element {
    const [secondAnswer, setSecondAnswer] = useState<string>("");
    const secondAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    return (
        <div id = "secondQues">        
            <h4>I am comfortable taking on leadership roles and making important decisions in a team.</h4>
                {secondAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`second-${i}`}
                        type="radio"
                        name="secondAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setSecondAnswer(e.target.value);
                        }}
                        checked={secondAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                <div>You have chosen: {secondAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/ThirdQuestion">Next Question</Link>
      </Button></footer>

                </div>
            );
}

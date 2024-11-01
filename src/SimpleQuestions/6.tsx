import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './questions.css';
export function SixthQuestion(): React.JSX.Element {
    const [sixthAnswer, setSixthAnswer] = useState<string>("");
    const sixthAnswers = ["ex17", "ex18", "ex19", "ex20"];
    return (
        <div id = "sixthQues">        
            <h4>Question 6</h4>
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
                <div>You have chosen: {sixthAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/SeventhQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

import React, { useState } from 'react';
import './simple.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


export function SimpleInterface(): React.JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    const firstAnswers = ["ex17", "ex18", "ex19", "ex20"];
    return (
        <div id = "firstQues">        
            <h4>Question 1</h4>
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
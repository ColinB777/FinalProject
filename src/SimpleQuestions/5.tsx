import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './questions.css';
export function FifthQuestion(): React.JSX.Element {
    const [fifthAnswer, setFifthAnswer] = useState<string>("");
    const fourthAnswers = ["ex17", "ex18", "ex19", "ex20"];
    return (
        <div id = "fifthQues">        
            <h4>Question 5</h4>
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
                <div>You have chosen: {fifthAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/SixthQuestion">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

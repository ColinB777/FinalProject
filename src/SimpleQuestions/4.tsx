import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './questions.css';
export function FourthQuestion(): React.JSX.Element {
    const [fourthAnswer, setFourthAnswer] = useState<string>("");
    const fourthAnswers = ["ex13", "ex14", "ex15", "ex16"];
    return (
        <div id = "thirdQues">        
            <h4>Question 4</h4>
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

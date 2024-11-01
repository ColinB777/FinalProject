import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './questions.css';
export function SeventhQuestion(): React.JSX.Element {
    const [seventhAnswer, setSeventhAnswer] = useState<string>("");
    const seventhAnswers = ["ex17", "ex18", "ex19", "ex20"];
    return (
        <div id = "seventhQues">        
            <h4>Question 7</h4>
                {seventhAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`seventh-${i}`}
                        type="radio"
                        name="seventhAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setSeventhAnswer(e.target.value);
                        }}
                        checked={seventhAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                <div>You have chosen: {seventhAnswer}</div>
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="Results">Next Question</Link>
      </Button></footer>
                </div>
                
            );
}

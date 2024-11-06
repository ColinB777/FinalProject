import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './simple.css';

export function SeventhQuestion(): React.JSX.Element {
    const [seventhAnswer, setSeventhAnswer] = useState<string>("");
    const seventhAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    let blankQuestion = false;
    if (seventhAnswer === "") {
        blankQuestion = true 
    }
    return (
        <div>
            <div>
                <h1>Basic Assessment</h1>
                <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>
            </div>
        <div className = "simple_question">        
            <h4>7. I am motivated by the potential to earn a high salary and achieve financial security in my work.</h4>
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
               
                </div>
                <div>You have chosen: {seventhAnswer}</div>

                
                <footer> <Button disabled = {blankQuestion} style={{background:'white',margin:10}} >
      <Link to="Results">Submit Answers</Link>
      </Button></footer>
                
                </div>
            );
}

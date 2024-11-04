import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../simple.css';
export function SecondQuestion(): React.JSX.Element {
    const [secondAnswer, setSecondAnswer] = useState<string>("");
    const secondAnswers = ["ex5", "ex6", "ex7", "ex8"];
    return (
        <div>
<div><h1>Basic Assessment</h1>
            <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>
</div>
            
        <div className = 'simple_question'>     
        
           
            <h4>Question 2</h4>
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

                </div>
                <div>You have chosen: {secondAnswer}</div>
                
                <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/ThirdQuestion">Next Question</Link>
      </Button></footer>

                </div>
            );
}

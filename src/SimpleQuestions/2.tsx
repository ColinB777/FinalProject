import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './simple.css';
import { BsArrowRightCircleFill } from "react-icons/bs";



export function SecondQuestion(): React.JSX.Element {
    const [secondAnswer, setSecondAnswer] = useState<string>("");
    const secondAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    let blankQuestion = false;
    if (secondAnswer === "") {
        blankQuestion = true 
    }
    return (      
            
        
        <div>
<div><h1> Basic Assessment</h1>
            <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>
</div>

        <div className = 'simple_question'>     
        
           
        <h4 style = {{fontWeight:'bold',paddingBottom:10}}>2. I am comfortable taking on leadership roles and making important decisions in a team.</h4>
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
                
                <footer> <Button className = "next-btn" disabled={blankQuestion} style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/ThirdQuestion">Next Question <BsArrowRightCircleFill /></Link>
      </Button></footer>

                </div>
            );
}

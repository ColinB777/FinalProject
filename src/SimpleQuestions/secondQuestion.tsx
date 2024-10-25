import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
export function SecondQuestion(): React.JSX.Element {
    const [secondAnswer, setSecondAnswer] = useState<string>("");
    const secondAnswers = ["ex5", "ex6", "ex7", "ex8"];
    return (
        <div id = "secondQues">        
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
                <div>You have chosen: {secondAnswer}</div>
                </div>
            );
}

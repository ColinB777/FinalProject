import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
export function ThirdQuestion(): React.JSX.Element {
    const [thirdAnswer, setThirdAnswer] = useState<string>("");
    const thirdAnswers = ["ex9", "ex10", "ex11", "ex12"];
    return (
        <div id = "secondQues">        
            <h4>Question 3</h4>
                {thirdAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`second-${i}`}
                        type="radio"
                        name="secondAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setThirdAnswer(e.target.value);
                        }}
                        checked={thirdAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                <div>You have chosen: {thirdAnswer}</div>
                </div>
                
            );
}

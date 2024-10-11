import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function SimpleInterface(): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("ex1");
    const answers=["ex1","ex2","ex3","ex4"];
    return (
        <div>
            {answers.map((Answer: string,i) => 
             <Form.Check style={{backgroundColor:"Yellow"}}
                inline
                key={i}
                type="radio"
                name="answer"
                label={Answer}
                onChange={(e) => {
                    setAnswer(e.target.value);
                }}
                checked={answer === Answer}
                value={Answer}
            />
            )}
            <div>
                You have chosen{" "}
                    {answer}
            </div>
        </div>
        
    );
}
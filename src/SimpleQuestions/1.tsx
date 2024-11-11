import React, { useState } from 'react';
import './simple.css';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';




type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question1({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question1: "I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable. " + answer }));
        navigate("/SimpleQuestions/Question2");
    };

    return (
        <div>
            <h4>1. I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable.</h4>
            {options.map((option, i) => (
                <Form.Check
                    inline
                    key={i}
                    type="radio"
                    name="question1"
                    label={option}
                    onChange={(e) => setAnswer(e.target.value)}
                    checked={answer === option}
                    value={option}
                />
            ))}
            <Button disabled={blankQuestion} onClick={handleNext}>Next</Button>
        </div>
    );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './simple.css';

type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question4({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question4: "I enjoy interacting with people throughout my workday and thrive in social work environments. " + answer }));
        navigate("/SimpleQuestions/Question5");
        localStorage.setItem("barProg", "15");
    };

    return (
        <div className="question-container">
            <h4>4. I enjoy interacting with people throughout my workday and thrive in social work environments.</h4>
            {options.map((option, i) => (
                <Form.Check
                    inline
                    key={i}
                    type="radio"
                    name="question4"
                    label={option}
                    onChange={(e) => setAnswer(e.target.value)}
                    checked={answer === option}
                    value={option}
                    aria-label={`option-${i}`}
                />
            ))}
            <Button disabled={blankQuestion} onClick={handleNext} className="next-button">
                Next
            </Button>
            <div className='progressBar' style={{width: localStorage.getItem("barProg") + "%"}}>
            {"Current Progress"}
        </div>
        </div>
    );
}

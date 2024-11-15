import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './simple.css';

type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question6({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question6:"I value opportunities to continuously learn and develop new skills within my career. " +  answer }));
        navigate("/SimpleQuestions/Question7");
    };

    return (
        <div className = "simple_question">
            <h4 className = "question">6. I value opportunities to continuously learn and develop new skills within my career.</h4>
            {options.map((option, i) => (
                <Form.Check
                    className = "answerButtons"
                    inline
                    key={i}
                    type="radio"
                    name="question6"
                    label={option}
                    onChange={(e) => setAnswer(e.target.value)}
                    checked={answer === option}
                    value={option}
                    aria-label={`option-${i}`}
                />
            ))}
            <br></br>
            <Button className = "next-btn" disabled={blankQuestion} onClick={handleNext}>
                Next
            </Button>
        </div>
    );
}

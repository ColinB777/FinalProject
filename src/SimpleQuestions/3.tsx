import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './simple.css';



type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question3({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question3: "I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable. " + answer }));
        navigate("/SimpleQuestions/Question4");
    };

    return (
        <div className="question-container">
            <h4>3. I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable.</h4>
            {options.map((option, i) => (
                <Form.Check
                    inline
                    key={i}
                    type="radio"
                    name="question3"
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
        </div>
    );
}

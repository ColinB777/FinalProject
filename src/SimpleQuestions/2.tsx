import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './simple.css';

type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question2({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question2: "I am comfortable taking on leadership roles and making important decisions in a team. " + answer }));
        navigate("/SimpleQuestions/Question3");
    };

    const handlePrev = () => {
        setResponses(prev => ({...prev, question1:""}))
        navigate("/basic_quiz");
    };

    return (
        <div className="simple_question">
            <h4 className='question'>2. I am comfortable taking on leadership roles and making important decisions in a team.</h4>
            {options.map((option, i) => (
                <Form.Check
                    className = "answerButtons"
                    inline
                    key={i}
                    type="radio"
                    name="question2"
                    label={option}
                    onChange={(e) => setAnswer(e.target.value)}
                    checked={answer === option}
                    value={option}
                    aria-label={`option-${i}`}
                />
            ))}
            <br></br>
            <Button className = "next-btn" onClick={handlePrev}>
                Previous
            </Button>
            <Button className = "next-btn"disabled={blankQuestion} onClick={handleNext}>
                Next
            </Button>
        </div>
    );
}

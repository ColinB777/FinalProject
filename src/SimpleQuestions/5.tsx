import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './simple.css';


type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question5({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question5: "It’s important to me to have a job that allows me to see tangible results from my efforts. " + answer }));
        navigate("/SimpleQuestions/Question6");
        localStorage.setItem("barProg", "15");
    };

    return (
        <div className = "simple_question">
            <h4 className='question'>5. It’s important to me to have a job that allows me to see tangible results from my efforts.</h4>
            {options.map((option, i) => (
                <Form.Check
                className ="answerButtons"
                    inline
                    key={i}
                    type="radio"
                    name="question5"
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
            <div className='progressBar' style={{width: localStorage.getItem("barProg") + "%"}}>
            {"Current Progress"}
        </div>
        </div>
        
    );
}

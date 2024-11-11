import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './simple.css';

<<<<<<< HEAD
        <div className = 'simple_question'>     
        
           
        <h4>2. I am comfortable taking on leadership roles and making important decisions in a team.</h4>
        <div className='progressBorder'>
            <div className='progressBar' style={{width: localStorage.getItem('barProg') + "%"}}></div>
        </div>
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
=======
type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};
>>>>>>> 13343bcbcba1ae64738e12b89c25b7ffd8197ff2

export default function Question2({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question2: "I am comfortable taking on leadership roles and making important decisions in a team. " + answer }));
        navigate("/SimpleQuestions/Question3");
    };

    return (
        <div className="question-container">
            <h4>2. I am comfortable taking on leadership roles and making important decisions in a team.</h4>
            {options.map((option, i) => (
                <Form.Check
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
            <Button disabled={blankQuestion} onClick={handleNext} className="next-button">
                Next
            </Button>
        </div>
    );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { PlantProgressBar } from '../components/progressSimple';
import './simple.css';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";



type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question3({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    localStorage.setItem('questionNum', '3');
    let questionNum = parseInt(localStorage.getItem('questionNum') || "1");

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question3: "I thrive in creative environments where I can express my ideas through art, writing, or design. " + answer }));
        navigate("/SimpleQuestions/Question4");
    };
    const handlePrev = () => {
        setResponses(prev => ({...prev, question2:"", question3:""}))
        navigate("/SimpleQuestions/Question2");
    };

    return (
        <div className = "simple_question">
            <h4 className = "question">3. I thrive in creative environments where I can express my ideas through art, writing, or design.</h4>
            {options.map((option, i) => (
                <Form.Check
                    className='answerButtons'
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
            <br></br>
            <Button  className = "next-btn" onClick={handlePrev}>
            <BsArrowLeftCircleFill/>
                Previous
            </Button>
            <Button className = "next-btn" disabled={blankQuestion} onClick={handleNext}>
                Next
                <BsArrowRightCircleFill/>
            </Button>
            {answer !== '' ? PlantProgressBar({answer: answer, currentQuestion: questionNum}) 
            :
            PlantProgressBar({answer: answer, currentQuestion: questionNum -= 1})}
        </div>
    );
}

import React, { useState } from 'react';
import './simple.css';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { PlantProgressBar } from '../components/progressSimple';
import { BsArrowRightCircleFill } from "react-icons/bs";



type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question1({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    localStorage.setItem('questionNum', '1');
    let questionNum = parseInt(localStorage.getItem('questionNum') || "1");

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question1: "I enjoy solving complex problems and analyzing data to find solutions. " + answer }));
        navigate("/SimpleQuestions/Question2");
    };

    

    return (
        <div className = "simple_question">
            <h4 className = "question">1. I enjoy solving complex problems and analyzing data to find solutions.</h4>
            {options.map((option, i) => (
                <Form.Check
                    className = "answerButtons"
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

            <div className = "button">
            <Button className = "next-btn" disabled={blankQuestion} onClick={handleNext} >Next<BsArrowRightCircleFill/></Button>
            {answer !== '' ? PlantProgressBar({answer: answer, currentQuestion: questionNum}) 
            :
            PlantProgressBar({answer: answer, currentQuestion: questionNum -= 1})}
            </div>
            </div>
        
    );
}

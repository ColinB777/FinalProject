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

export function Question5({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    localStorage.setItem('questionNum', '5');
    let questionNum = parseInt(localStorage.getItem('questionNum') || "1");

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question5: "I am motivated by working in high-pressure environments that require quick decision-making. " + answer }));
        navigate("/SimpleQuestions/Question6");
    };

    const handlePrev = () => {
        setResponses(prev => ({...prev, question4:"", question5:""}))
        navigate("/SimpleQuestions/Question4");
    };

    return (
        <div className = "simple_question">
            <h4 className='question'>5. I am motivated by working in high-pressure environments that require quick decision-making.</h4>
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
            <Button className = "next-btn" onClick={handlePrev}>
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

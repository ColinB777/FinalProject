// Question7.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { PlantProgressBar } from '../components/progressSimple';
import Confetti from 'react-confetti';


type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question7({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const navigate = useNavigate();

    localStorage.setItem('questionNum', '7');
    let questionNum = parseInt(localStorage.getItem('questionNum') || "1");

    const handleFinish = async () => {
        setResponses(prev => ({ ...prev, question7: "I am motivated by the potential to earn a high salary and achieve financial security in my work. "+ answer }));
        navigate("/SimpleQuestions/Results")

    };

    return (
        <div className = "simple_question">
            <h4 className = "question">7. I am motivated by the potential to earn a high salary and achieve financial security in my work. </h4>
            {options.map((option, i) => (
                <Form.Check
                className='answerButtons'
                    inline
                    key={i}
                    type="radio"
                    name="question7"
                    label={option}
                    onChange={(e) => setAnswer(e.target.value)}
                    checked={answer === option}
                    value={option}
                />
            ))}
            <Button disabled={!answer} onClick={handleFinish}>Get Career Assessment</Button>
            <br></br>
            <Button className = "submit-btn" disabled={!answer} onClick={handleFinish}>Get Career Assessment</Button>
            {answer !== '' ? PlantProgressBar({answer: answer, currentQuestion: questionNum}) 
            :
            PlantProgressBar({answer: answer, currentQuestion: questionNum -= 1})}
            {answer !== '' ? <Confetti height={1.1*window.outerHeight} gravity={.7}  numberOfPieces={200}></Confetti> : null}
        </div>
    );
}

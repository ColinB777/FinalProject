import React, { useState } from 'react';
import './simple.css';
<<<<<<< HEAD
import '../progressBar.css';
import { Link, useNavigate } from 'react-router-dom';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 13343bcbcba1ae64738e12b89c25b7ffd8197ff2
import { Button, Form } from 'react-bootstrap';




type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export default function Question1({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const navigate = useNavigate();

<<<<<<< HEAD
    const firstAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    
    let blankQuestion = !firstAnswer;
    let barVal = 0;
    

    // Store each response and go to the next question
    const handleNextQuestion = () => {
        setResponses(prev => ({ ...prev, firstQuestion: firstAnswer }));
        setFirstAnswer("");  // Reset the answer for the next question
        localStorage.setItem("barProg", (barVal + 15).toString());
        navigate("/SimpleQuestions/SecondQuestion");
=======
    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const blankQuestion = !answer;

    const handleNext = () => {
        setResponses(prev => ({ ...prev, question1: "I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable. " + answer }));
        navigate("/SimpleQuestions/Question2");
>>>>>>> 13343bcbcba1ae64738e12b89c25b7ffd8197ff2
    };

    return (
        <div>
<<<<<<< HEAD
            <h1>Basic Assessment</h1>
            <p>The basic career assessment is a compact, quicker version of the quiz...</p>

            <div className="simple_question">
                <h4>1. I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable.</h4>
                <div className='progressBorder'>
                    <div className='progressBar' style={{width: localStorage.getItem('barProg') + "%"}}></div>
                </div>
                {firstAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`first-${i}`}
                        type="radio"
                        name="firstAnswer"
                        label={Answer}
                        onChange={(e) => setFirstAnswer(e.target.value)}
                        checked={firstAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft: "40%" }}
                    />
                ))}
            </div>

            <div>You have chosen: {firstAnswer}</div>

            <footer>
                <Button disabled={blankQuestion} onClick={handleNextQuestion} style={{ background: 'white', margin: 10 }}>
                    <Link to="/SimpleQuestions/SecondQuestion">Next Question</Link>
                </Button>
            </footer>

            <div>
                {/* This button will only appear on the last question */}
                <Button onClick={APIRequest}>Get Career Assessment</Button>
            </div>

            <div>{report}</div>
=======
            <h4>1. I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable.</h4>
            {options.map((option, i) => (
                <Form.Check
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
            <Button disabled={blankQuestion} onClick={handleNext}>Next</Button>
>>>>>>> 13343bcbcba1ae64738e12b89c25b7ffd8197ff2
        </div>
    );
}

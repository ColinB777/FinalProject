// Question7.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';


type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export default function Question7({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const navigate = useNavigate();

    const handleFinish = async () => {
        setResponses(prev => ({ ...prev, question7: "I am motivated by the potential to earn a high salary and achieve financial security in my work. "+ answer }));
        navigate("/SimpleQuestions/Results")

    };

    return (
        <div>
            <h4>7. I am motivated by the potential to earn a high salary and achieve financial security in my work. </h4>
            {options.map((option, i) => (
                <Form.Check
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
        </div>
    );
}

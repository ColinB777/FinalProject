import React, { useState } from 'react';
import './simple.css';


export function SimpleInterface(): JSX.Element {
    const [answers, setAnswers] = useState({
        ques1: 'val1',
        ques2: 'val1',
        ques3: 'val1',
        ques4: 'val1',
        ques5: 'val1',
        ques6: 'val1',
        ques7: 'val1',
    });

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value, 
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Selected Values: ", answers);
    };
    return (
        <div>
            <h1>Simple Questions Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="questionList">
                    <ul>
                        <p>Question 1:</p>
                        <input
                            type="radio"
                            id="q1"
                            name="ques1"
                            value="val1"
                            checked={answers.ques1 === 'val1'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="val1">Option 1</label> <br />

                        <input
                            type="radio"
                            id="q2"
                            name="ques1"
                            value="val2"
                            checked={answers.ques1 === 'val2'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="val2">Option 2</label> <br />

                        <input
                            type="radio"
                            id="q3"
                            name="ques1"
                            value="val3"
                            checked={answers.ques1 === 'val3'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="val3">Option 3</label> <br />

                        <input
                            type="radio"
                            id="q4"
                            name="ques1"
                            value="val4"
                            checked={answers.ques1 === 'val4'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="val4">Option 4</label> <br />
                    </ul>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


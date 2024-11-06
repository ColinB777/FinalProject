import React, { useState } from 'react';
import './simple.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { OpenAI } from "openai";

const key = localStorage.getItem("MYKEY");

export function SimpleInterface(): React.JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    const [responses, setResponses] = useState<{ [key: string]: string }>({});
    const [report, setReport] = useState<string>("");
    const navigate = useNavigate();

    const firstAnswers = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    
    let blankQuestion = !firstAnswer;

    // Store each response and go to the next question
    const handleNextQuestion = () => {
        setResponses(prev => ({ ...prev, firstQuestion: firstAnswer }));
        setFirstAnswer("");  // Reset the answer for the next question
        navigate("/SimpleQuestions/SecondQuestion");
    };

    // When the user finishes the quiz, send all responses to OpenAI
    async function APIRequest() {
        if (!key) {
            return "Please input an API key to proceed.";
        }

        const formattedResponses = Object.entries(responses).map(([question, answer]) => `${question}: ${answer}`).join("\n");

        const openai = new OpenAI({
            organization: "org-EbrOwGpWn6qnLdFwzPY4qAsR",
            apiKey: JSON.parse(key),
            dangerouslyAllowBrowser: true
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a career assessment advisor..." }, // rest of the system prompt
                { role: "user", content: formattedResponses }
            ],
            temperature: 0.2,
            max_tokens: 850
        });

        setReport(completion.choices?.[0]?.message?.content ?? "Error: failed to retrieve answer");
    }

    return (
        <div>
            <h1>Basic Assessment</h1>
            <p>The basic career assessment is a compact, quicker version of the quiz...</p>

            <div className="simple_question">
                <h4>1. I prefer jobs with clear routines and structured tasks over roles that are highly flexible or unpredictable.</h4>
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
        </div>
    );
}

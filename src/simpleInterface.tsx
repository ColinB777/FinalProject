import React, { useState } from 'react';
import './simple.css';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


export function SimpleInterface(): React.JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    const [secondAnswer, setSecondAnswer] = useState<string>("");
    const [thirdAnswer, setThirdAnswer] = useState<string>("");
    const [fourthAnswer, setFourthAnswer] = useState<string>("");
    const [fifthAnswer, setFifthAnswer] = useState<string>("");
    const [sixthAnswer, setSixthAnswer] = useState<string>("");
    const [seventhAnswer, setSeventhAnswer] = useState<string>("");

    const firstAnswers = ["ex1", "ex2", "ex3", "ex4"];
    const secondAnswers = ["ex5", "ex6", "ex7", "ex8"];
    const thirdAnswers = ["ex9", "ex10", "ex11", "ex12"];
    const fourthAnswers = ["ex13", "ex14", "ex15", "ex16"];
    const fifthAnswers = ["ex17", "ex18", "ex19", "ex20"];
    const sixthAnswers = ["ex21", "ex22", "ex23", "ex24"];
    const seventhAnswers = ["ex25", "ex26", "ex27", "ex28"];


    return (
        <div>
            <div id = "firstSet">
            <h1>Basic Assessment</h1>
            <p>The basic career assessment is a compact, quicker version of the quiz which will allow users to get a narrowed down answer based on the preferences of the user through multiple choice.</p>

                <h4>Question 1</h4>
                {firstAnswers.map((Answer: string, i) => (
                    <Form.Check
                        key={`first-${i}`}
                        type="radio"
                        name="firstAnswer"
                        className = "radioButton"
                        label={Answer}
                        onChange={(e) => {
                            setFirstAnswer(e.target.value);
                        }}
                        checked={firstAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                <div>You have chosen: {firstAnswer}</div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h4>Question 2</h4>
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
                <div>You have chosen: {secondAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Question 3</h4>
                {thirdAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`third-${i}`}
                        type="radio"
                        name="thirdAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setThirdAnswer(e.target.value);
                        }}
                        checked={thirdAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                <div>You have chosen: {thirdAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Question 4</h4>
                {fourthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`fourth-${i}`}
                        type="radio"
                        name="fourthAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setFourthAnswer(e.target.value);
                        }}
                        checked={fourthAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                <div>You have chosen: {fourthAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Question 5</h4>
                {fifthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`fifth-${i}`}
                        type="radio"
                        name="fifthAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setFifthAnswer(e.target.value);
                        }}
                        checked={fifthAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%"}}
                    />
                ))}
                <div>You have chosen: {fifthAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Question 6</h4>
                {sixthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`sixth-${i}`}
                        type="radio"
                        name="sixthAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setSixthAnswer(e.target.value);
                        }}
                        checked={sixthAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex",paddingLeft:"40%"}}
                    />
                ))}
                <div>You have chosen: {sixthAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Question 7</h4>
                {seventhAnswers.map((Answer: string, i) => (
                    <Form.Check
                        inline
                        key={`seventh-${i}`}
                        type="radio"
                        name="seventhAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setSeventhAnswer(e.target.value);
                        }}
                        checked={seventhAnswer === Answer}
                        value={Answer}
                        style={{ display: "flex", paddingLeft:"40%",}}
                    />
                ))}
                <div>You have chosen: {seventhAnswer}</div>
            </div>
            <footer> <Button  style={{background:'white',margin:10}} >
      <Link to="/SimpleQuestions/test">test</Link>
      </Button></footer>
        </div>
        
    );
}
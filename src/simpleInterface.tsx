import React, { useState } from 'react';
import './simple.css';


export function SimpleInterface(): React.JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("ex1");
    const [secondAnswer, setSecondAnswer] = useState<string>("ex5");
    const [thirdAnswer, setThirdAnswer] = useState<string>("ex9");
    const [fourthAnswer, setFourthAnswer] = useState<string>("ex13");
    const [fifthAnswer, setFifthAnswer] = useState<string>("ex17");
    const [sixthAnswer, setSixthAnswer] = useState<string>("ex21");
    const [seventhAnswer, setSeventhAnswer] = useState<string>("ex25");

    const firstAnswers = ["ex1", "ex2", "ex3", "ex4"];
    const secondAnswers = ["ex5", "ex6", "ex7", "ex8"];
    const thirdAnswers = ["ex9", "ex10", "ex11", "ex12"];
    const fourthAnswers = ["ex13", "ex14", "ex15", "ex16"];
    const fifthAnswers = ["ex17", "ex18", "ex19", "ex20"];
    const sixthAnswers = ["ex21", "ex22", "ex23", "ex24"];
    const seventhAnswers = ["ex25", "ex26", "ex27", "ex28"];


    return (
        <div>
            <div>
                <h4>First Set of Radio Buttons</h4>
                {firstAnswers.map((Answer: string, i) => (
                    <Form.Check
                        style={{ backgroundColor: "Yellow" }}
                        inline
                        key={`first-${i}`}
                        type="radio"
                        name="firstAnswer"
                        label={Answer}
                        onChange={(e) => {
                            setFirstAnswer(e.target.value);
                        }}
                        checked={firstAnswer === Answer}
                        value={Answer}
                    />
                ))}
                <div>You have chosen: {firstAnswer}</div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h4>Second Set of Radio Buttons</h4>
                {secondAnswers.map((Answer: string, i) => (
                    <Form.Check
                        style={{ backgroundColor: "Yellow" }}
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
                    />
                ))}
                <div>You have chosen: {secondAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Third Set of Radio Buttons</h4>
                {thirdAnswers.map((Answer: string, i) => (
                    <Form.Check
                        style={{ backgroundColor: "Yellow" }}
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
                    />
                ))}
                <div>You have chosen: {thirdAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Fourth Set of Radio Buttons</h4>
                {fourthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        style={{ backgroundColor: "Yellow" }}
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
                    />
                ))}
                <div>You have chosen: {fourthAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Fifth Set of Radio Buttons</h4>
                {fifthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        style={{ backgroundColor: "Yellow" }}
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
                    />
                ))}
                <div>You have chosen: {fifthAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Sixth Set of Radio Buttons</h4>
                {sixthAnswers.map((Answer: string, i) => (
                    <Form.Check
                        style={{ backgroundColor: "Yellow" }}
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
                    />
                ))}
                <div>You have chosen: {sixthAnswer}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h4>Seventh Set of Radio Buttons</h4>
                {seventhAnswers.map((Answer: string, i) => (
                    <Form.Check
                        style={{ backgroundColor: "Yellow" }}
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
                    />
                ))}
                <div>You have chosen: {seventhAnswer}</div>
            </div>
        </div>

        
    );
}
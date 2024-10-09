import React, { useState } from 'react';
import logo from './logo.svg';
import './simple.css';
import { Button, Form } from 'react-bootstrap';

export function simpleInterface(): JSX.Element {
    return <div>
    <h1>Simple Questions Page</h1>
    <div className = "questionList">
    <ul>
    <p> Question 1: </p>
    <input type="radio" id="q1" name="ques1" value="test3" checked></input> <br></br> 
    <input type="radio" id="q1" name="ques1" value="test3" checked></input> <br></br> 
    <input type="radio" id="q1" name="ques1" value="test3" checked></input> <br></br> 
    <input type="radio" id="q1" name="ques1" value="test3" checked></input> <br></br> 
    </ul>
    <ul>
    <p> Question 2: </p>
    <input type="radio" id="q2" name="ques2" value="test3" checked></input> <br></br> 
    <input type="radio" id="q2" name="ques2" value="test3" checked></input> <br></br> 
    <input type="radio" id="q2" name="ques2" value="test3" checked></input> <br></br> 
    <input type="radio" id="q2" name="ques2" value="test3" checked></input> <br></br> 
    </ul>
    <ul>
    <p> Question 3: </p>
    <input type="radio" id="q3" name="ques3" value="test3" checked></input> <br></br> 
    <input type="radio" id="q3" name="ques3" value="test3" checked></input> <br></br> 
    <input type="radio" id="q3" name="ques3" value="test3" checked></input> <br></br> 
    <input type="radio" id="q3" name="ques3" value="test3" checked></input> <br></br> 
    </ul>
    <ul>
    <p> Question 4: </p>
    <input type="radio" id="q4" name="ques4" value="test3" checked></input> <br></br> 
    <input type="radio" id="q4" name="ques4" value="test3" checked></input> <br></br> 
    <input type="radio" id="q4" name="ques4" value="test3" checked></input> <br></br> 
    <input type="radio" id="q4" name="ques4" value="test3" checked></input> <br></br> 
    </ul>
    <ul>
    <p> Question 5: </p>
    <input type="radio" id="q5" name="ques5" value="test3" checked></input> <br></br> 
    <input type="radio" id="q5" name="ques5" value="test3" checked></input> <br></br> 
    <input type="radio" id="q5" name="ques5" value="test3" checked></input> <br></br> 
    <input type="radio" id="q5" name="ques5" value="test3" checked></input> <br></br> 
    </ul>
    <ul>
    <p> Question 6: </p>
    <input type="radio" id="q6" name="ques6" value="test3" checked></input> <br></br> 
    <input type="radio" id="q6" name="ques6" value="test3" checked></input> <br></br> 
    <input type="radio" id="q6" name="ques6" value="test3" checked></input> <br></br> 
    <input type="radio" id="q6" name="ques6" value="test3" checked></input> <br></br> 
    </ul>
    <ul>
    <p> Question 7: </p>
    <input type="radio" id="q7" name="ques7" value="test3" checked></input> <br></br> 
    <input type="radio" id="q7" name="ques7" value="test3" checked></input> <br></br> 
    <input type="radio" id="q7" name="ques7" value="test3" checked></input> <br></br> 
    <input type="radio" id="q7" name="ques7" value="test3" checked></input> <br></br> 
    </ul>
    </div>

    </div>
}


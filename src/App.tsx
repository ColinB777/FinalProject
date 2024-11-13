import React, { useState } from 'react';
import './App.css';
import './progressBar.css'
import { Button, Form} from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {Detailedquiz} from "./DetailedQuestions/Detailed"
import {DetailedResult} from "./DetailedQuestions/Result"
import { Question1 } from "./SimpleQuestions/1";
import { Question2 } from './SimpleQuestions/2';
import { Question3 } from './SimpleQuestions/3';
import { Question4 } from './SimpleQuestions/4';
import { Question5 } from './SimpleQuestions/5';
import { Question6 } from './SimpleQuestions/6';
import { Question7 } from './SimpleQuestions/7';
import { Results } from './SimpleQuestions/Results';

import { BsFillHouseFill } from "react-icons/bs";


import TypewriterComponent from './components/Typewriter';
import Tree from './components/tree';
//import { isVisible } from '@testing-library/user-event/dist/utils';




//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect

if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}
console.log(keyData);


export function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [buttonState, setVisible] = useState<boolean>(true);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const [report, setReport]= useState<string[]>([]);
  const [visibility,setVisibility] = useState<boolean>(true);
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
  
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function hideButtons()
  {
    setVisible(!buttonState);
    localStorage.setItem('barProg', '0');
  }

  function handleQuizLinkclick(){
    setVisibility(false);
  }

  function handleHomeLinkclick(){
    setVisibility(true);
  }


  return (
    <div>
    <body>

    <Router> 

      <header>
        <h1 className = "title-header"> Career Helpi </h1>
      </header> 
      <Tree />


      <div style={{alignItems:'center'}}>
      <div className = 'menu-bar'>
        {/*Leave the buttons commented out, I doubt we will use them again but just leave them for now */}

      {/*<Button className = "Career-Btn" id="HIDE_BASIC" hidden={buttonState} onClick={hideButtons}>
      <Link to="/basic_quiz" onClick={handleQuizLinkclick}>Basic Career Assessment</Link>
  </Button>*/}

      <Button className = "home-btn" id="HOME" onClick={hideButtons}>
        <Link to="/" onClick={handleHomeLinkclick}><BsFillHouseFill className="homeIcon" /></Link>
      </Button>

      {/*<Button className = "Career-Btn" hidden={buttonState} onClick={hideButtons}>
      <Link to="/detailed_quiz" onClick={handleQuizLinkclick}>Detailed Career Assessment</Link>
</Button>*/}
      </div>


      

      

      {(visibility) ?
      <div>
      <div id = "Typewriter">
      <TypewriterComponent />

      </div>

      
      <div className = "description_flexbox" >
        <h3 className = "differenceTitle">What is The Difference Between the Simple and Detailed Quiz?</h3>

        <div className = "inner_description_flexbox">
        <h4 className = "description-title">Basic</h4>
        <p>The basic career assessment is a compact, quicker version of the quiz 
          which will allow users to get a narrowed down answer based on the preferences 
          of the user through multiple choice.</p>
        <Button className = "Career-Btn" onClick = {hideButtons}>
          <Link to="/basic_quiz" onClick={handleQuizLinkclick}>Start Simple Quiz!</Link>
        </Button> 
        </div>


        <div className = "inner_description_flexbox">
        <h4 className = "description-title">Detailed</h4>
        <p>The Detailed career assessment is an input based  quiz 
          which will allow users to express their answers with as many sentences 
          the might need. Then receive a tailored report from them made by AI assistant</p>
          
          <Button className = "Career-Btn" onClick={hideButtons}>
            <Link to="/detailed_quiz" onClick={handleQuizLinkclick}>Start Detailed Quiz!</Link>
          </Button>
        
        </div>
      </div> 
      </div>: null}

    
      </div>
      <Routes>
          <Route path="/detailed_quiz" element={<Detailedquiz Report={report} setReport={setReport} />} />
            <Route path="/DetailedResult" element={<DetailedResult report={report}/>} />
            <Route path="/basic_quiz" element={<Question1 responses={responses} setResponses={setResponses} />} />
            <Route path="/SimpleQuestions/Question2" element={<Question2 responses={responses} setResponses={setResponses} />} />
            <Route path="/SimpleQuestions/Question3" element={<Question3 responses={responses} setResponses={setResponses} />} />
            <Route path="/SimpleQuestions/Question4" element={<Question4 responses={responses} setResponses={setResponses} />} />
            <Route path="/SimpleQuestions/Question5" element={<Question5 responses={responses} setResponses={setResponses} />} />
            <Route path="/SimpleQuestions/Question6" element={<Question6 responses={responses} setResponses={setResponses} />} />
            <Route path="/SimpleQuestions/Question7" element={<Question7 responses={responses} setResponses={setResponses} />} />
            <Route path="/SimpleQuestions/Results" element={<Results responses={responses} />} />
          </Routes>
      </Router>

    <div className = "page-bottom">
    {/*<footer>Colin Barry,Matias Sayanes,Samuel Zheng,Derek Johnson</footer>*/}

    <Form className = "apiKey">
        <Form.Label style = {{fontSize:10}}>API Key:
        <Form.Control style = {{width:300, fontSize:10}}type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        </Form.Label>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </div>



        </body>
        </div>
  );
}


export default App;
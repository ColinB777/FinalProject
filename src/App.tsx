import React, { useState } from 'react';
import './App.css';
import './progressBar.css'
import { Button, Form} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {Detailedquiz} from "./Detailed"
// import { HomeTest } from './Home';
import {SimpleInterface} from "./simpleInterface"
import {SecondQuestion } from './SimpleQuestions/2';
import{ThirdQuestion} from './SimpleQuestions/3';
import{FourthQuestion} from './SimpleQuestions/4';
import{FifthQuestion} from './SimpleQuestions/5';
import{SixthQuestion} from './SimpleQuestions/6';
import { SeventhQuestion } from './SimpleQuestions/7';


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
  // const [barState, setBar] = useState<number>(0);
  const [buttonState, setVisible] = useState<boolean>(true);
  
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
  }


  return (
    
    <body>
    <div>
    <Router> 
      <header className = "title-header">
        <h1>Career Helpi</h1>
        <hr></hr>
      </header>

      
      {/* <Button onClick={() => setBar(barState + 25)}> Increase</Button>
      <span>{} </span>
      <div id="bar">
        <div className="progress" style={{width: barState + "%"}}></div>
      </div> */}
     
      <div style={{alignItems:'center'}}>
      <div className = 'menu bar'>
        

      <Button className = "Career-Btn" hidden={buttonState} onClick={hideButtons}>
      <Link to="/detailed_quiz">Detailed Career Assesment</Link>
      </Button>

      <Button className = "home-btn" id="HOME" onClick={hideButtons}>
        <Link to="/">Home</Link>
      </Button>


      <Button className = "Career-Btn" id="HIDE_BASIC" hidden={buttonState} onClick={hideButtons}>
      <Link to="/basic_quiz">Basic Career Assesment</Link>
      </Button>

      </div>
<hr></hr>
      </div>

      <Routes>
        <Route path="/detailed_quiz" element={<Detailedquiz />} />
        <Route path="/basic_quiz" element={<SimpleInterface/>} />
        <Route path ="/SimpleQuestions/secondQuestion" element = {<SecondQuestion/>} />
        <Route path ="/SimpleQuestions/thirdQuestion" element = {<ThirdQuestion/>} />
        <Route path ="/SimpleQuestions/fourthQuestion" element = {<FourthQuestion/>} />
        <Route path ="/SimpleQuestions/fifthQuestion" element = {<FifthQuestion/>} />
        <Route path ="/SimpleQuestions/sixthQuestion" element = {<SixthQuestion/>} />
        <Route path ="/SimpleQuestions/seventhQuestion" element = {<SeventhQuestion/>} />
      </Routes>
    </Router>

    <div className = "page-bottom">
    {/*<footer>Colin Barry,Matias Sayanes,Samuel Zheng,Derek Johnson</footer>*/}

    <Form>
        <Form.Label style = {{fontSize:10}}>API Key:</Form.Label>
        <Form.Control style = {{width:300, fontSize:10}}type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </div>

    </div>
    </body>
  );
}


export default App;
import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {Detailedquiz} from "./Detailed"
import {SimpleInterface} from "./simpleInterface"


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div className="App" style={{background:'lime'}}>
    <Router>
      <header className="App">
        <h4> Colin Barry,Matias Sayanes,Samuel Zheng,Derek Johnson </h4>
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      <Button style={{background:'white'}}>
      <Link to="/detailed_quiz" style={{color:'magenta'}}>Detailed quiz</Link>
      </Button>
      <Button  style={{background:'white'}}>
      <Link to="/basic_quiz">Quiz</Link>
      </Button>
      <Routes>
        <Route path="/detailed_quiz" element={<Detailedquiz />} />
        <Route path="/basic_quiz" element={<SimpleInterface/>} />
      </Routes>
    </Router>
    </div>
  );
}


export default App;

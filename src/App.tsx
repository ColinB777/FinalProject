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

  function testButtonPrint()
  {
    alert("Sending back to home page... (TEST)");
  }
  
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div className="App">
    <Router>
      <header className="App">
        <h1>Career Helpi</h1>
        <hr></hr>
      </header>

      <div>
      <Button type="button" style={{background:'blue', margin:10}} onClick={testButtonPrint}> Home</Button>
      </div>
      <div style={{alignItems:'center'}}>
        

      <div>
      <Button className = "Career-Btn">
      <Link to="/detailed_quiz">Detailed Career Assesment</Link>
      </Button>


      <Button className = "Career-Btn" >
      <Link to="/basic_quiz">Basic Career Assesment</Link>
      </Button>
      </div>

      </div>


      <Routes>
        <Route path="/detailed_quiz" element={<Detailedquiz />} />
        <Route path="/basic_quiz" element={<SimpleInterface/>} />
      </Routes>
    </Router>

    <div className = "page-bottom">
    <footer>Colin Barry,Matias Sayanes,Samuel Zheng,Derek Johnson</footer>

    <Form>
        <Form.Label style = {{fontSize:10}}>API Key:</Form.Label>
        <Form.Control style = {{width:300, fontSize:10}}type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </div>

    </div>
    
  );
}


export default App;
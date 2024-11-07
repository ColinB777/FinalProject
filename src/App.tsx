import React, { useState } from 'react';
import './App.css';
import './progressBar.css'
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Detailedquiz } from "./Detailed";
import Results from "./SimpleQuestions/Results";
import Question1 from "./SimpleQuestions/1";
import Question2 from './SimpleQuestions/2';
import Question3 from './SimpleQuestions/3';
import Question4 from './SimpleQuestions/4';
import Question5 from './SimpleQuestions/5';
import Question6 from './SimpleQuestions/6';
import Question7 from './SimpleQuestions/7';

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}
console.log(keyData);

export function App() {
  const [key, setKey] = useState<string>(keyData); // For API key input
  const [buttonState, setVisible] = useState<boolean>(true);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  
  // Sets the local storage item to the API key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); // Reloading to refresh local storage data
  }

  // Updates local state of key when user changes it
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function hideButtons() {
    setVisible(!buttonState);
  }

  return (
    <body>
      <div className="App">
        <Router> 
          <header className="App">
            <h1>Career Helpi</h1>
            <hr />
          </header>

          <div style={{ alignItems: 'center' }}>
            <div className='menu bar'>
              <Button className="Career-Btn" id="HIDE_DETAILED" hidden={buttonState} onClick={hideButtons}>
                <Link to="/detailed_quiz">Detailed Career Assessment</Link>
              </Button>

              <Button style={{ background: 'white', margin: 10 }} id="HOME" onClick={hideButtons}>
                <Link to="/">Home</Link>
              </Button>

              <Button className="Career-Btn" id="HIDE_BASIC" hidden={buttonState} onClick={hideButtons}>
                <Link to="/basic_quiz">Basic Career Assessment</Link>
              </Button>
            </div>
            <hr />
          </div>

          <Routes>
          <Route path="/detailed_quiz" element={<Detailedquiz />} />
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

        <div className="page-bottom">
          <Form>
            <Form.Label style={{ fontSize: 10 }}>API Key:</Form.Label>
            <Form.Control style={{ width: 300, fontSize: 10 }} type="password" placeholder="Insert API Key Here" onChange={changeKey} />
            <br />
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>
      </div>
    </body>
  );
}

export default App;

import {useState } from "react";
import './detailed.css';
import { Button, Form, FormGroup } from "react-bootstrap";

export function Detailedquiz() {
  //This type will help to organize the data
  type Question={
    body:string;
    answer:string;
  }
  //state that both hold the questions to be displayed and
  //the answer inputted to each question
  const [qList,setQlist]= useState<Question[]>([
    {body:"1.What are your core strengths? (Think about skills, talents, or areas where you consistently excel, both professionally and personally.)",answer:""},
    {body:"2.What are your interests and passions? (What activities or subjects excite you and keep you engaged, even when you’re not being paid?)",answer:""},
    {body:"3.What work environment do you thrive in? (Do you prefer a structured or flexible environment? Do you work better alone or in teams?)",answer:""},
    {body:"4.What are your long-term career goals? (Where do you see yourself in 5, 10, or 20 years? Do you aspire to leadership roles, or would you prefer to be a specialist?)",answer:""},
    {body:"5.What are your values and priorities in a job?(Is work-life balance important to you? Do you seek financial security, creativity, or the opportunity to make a difference?)",answer:""},
    {body:"6.What type of work drains or energizes you? (What tasks or responsibilities feel exhausting versus those that feel exciting and fulfilling?)",answer:""},
    {body:"7.What is your preferred learning style? (Do you prefer learning by doing, studying theory, or through hands-on experience? How do you like to grow professionally?)",answer:""}
  ]);
  //Const to check you answer all questions
  const allAnswered = Object.values(qList).every((answer) => answer.answer.trim() !== '');
  //Updates the answer of the question which the user responded
  function updateAnswer(event: string, index:number) {
    const updatedQlist=qList.map((question:Question,i:number)=>(i===index ? {...question, answer:event}:question))
    setQlist(updatedQlist);
  }
  //Pause button
  function PauseButton(){
    alert("The quiz is paused, Click 'ok' to resume");
  }

    //displays the questions and a text input box to each to answer them 
    //using map function
    return(<div>
      <h1>Detailed Quiz</h1>
      <Button onClick={PauseButton}>Pause</Button>

      {qList.map((question:Question,i:number) =>(
      <FormGroup className="Question_Box">
        <h5>{question.body}</h5>
      <div className = "text_area">
      <Form.Control 
        as = "textarea"
        value={question.answer} 
        onChange={(e)=>updateAnswer(e.target.value,i)} />
      </div>
      <span>Current Answer={question.answer}</span>
      </FormGroup>
      ))}
      <Button disabled={!allAnswered}>Submit your answers.</Button>
    </div> 
    );
}
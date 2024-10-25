import {useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

export function Detailedquiz() {
  //This type will help to organize the data
  type Question={
    body:string;
    answer:string;
  }
  //state that both hold the questions to be displayed and
  //the answer inputted to each question
  const [qList,setQlist]= useState<Question[]>([{body:"q1",answer:""},{body:"q2",answer:""}]);
  
  //Updates the answer of the question which the user responded
  function updateAnswer(event: string, index:number) {
    const updatedQlist=qList.map((question:Question,i:number)=>(i===index ? {...question, answer:event}:question))
    setQlist(updatedQlist);
  }
    //displays the questions and a text input box to each to answer them 
    //using map function
    return(<div>
      <h2>Detailed_quiz</h2>
      {qList.map((question:Question,i:number) =>(
      <FormGroup>
      <Form.Label>{question.body}</Form.Label>
      <Form.Control 
      as = "textarea"
      value={question.answer} 
      onChange={(e)=>updateAnswer(e.target.value,i)} 
      style={{maxWidth: "60%", marginLeft: "20%"}} />
      <span>Current Answer={question.answer}</span>
      </FormGroup>
      ))}
      
    </div> 
    );
}
import { ChangeEvent, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

export function Detailedquiz() {
  type Question={
    body:string;
    answer:string;
  }
  const [qList,setQlist]= useState<Question[]>([{body:"q1",answer:""},{body:"q2",answer:""}]);
  
  function updateAnswer(event: string, index:number) {
    const updatedQlist=qList.map((question:Question,i:number)=>(i==index ? {...question, answer:event}:question))
    setQlist(updatedQlist);
  }
    return(<div>
      <h2>Detailed_quiz</h2>
      {qList.map((question:Question,i:number) =>(
      <FormGroup>
      <Form.Label>{question.body}</Form.Label>
      <Form.Control value={question.answer} onChange={(e)=>updateAnswer(e.target.value,i)} />
      <span>Current Answer={question.answer}</span>
      </FormGroup>
      ))}
      
    </div> 
    );
}
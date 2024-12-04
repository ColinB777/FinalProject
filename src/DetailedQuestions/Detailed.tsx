import { useState } from "react";
import './detailed.css';
import { Button, Form, FormGroup } from "react-bootstrap";
import { OpenAI } from "openai";
import Confetti from "react-confetti";
import gif from "../images/loading.gif";
import { useNavigate } from 'react-router-dom';
import React from "react";
import { CircularProgressBar } from '../components/progressBar';

import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";


// type DetailedProps={
//   Report:string[];
//   setReport: React.Dispatch<React.SetStateAction<string[]>>;
// };

export function Detailedquiz():React.JSX.Element {
  
  
  const navigate = useNavigate();
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

  //state that control the question being displayed
  const [displayedQ,setDisplayedQ]=useState<number>(0);

  function handleNext(){
    if (displayedQ===6){
      return;
    }
    setDisplayedQ(displayedQ+1);
  }

  function handlePrevious(){
    if (displayedQ===0){
      return;
    }
    setDisplayedQ(displayedQ-1);
  }

  //Constants that keep count of the answered questions and total ones.
  const answeredCount = qList.filter(q => q.answer.trim() !== "").length;
  const totalQuestions = qList.length;

  //Loading State that will help display loading animations
  const [loading,setLoading]=useState<boolean>(false);
  const [resultsReady,setResultsReady]=useState<boolean>(false);

  //state that holds the message used in the API request
  const [msgtoAI,setMSG]=useState<string>("");

  //Const to check you answer all questions
  const allAnswered = Object.values(qList).every((answer) => answer.answer.trim() !== '');

  //Updates the answer of the question which the user responded
  function updateAnswer(event: string, index:number) {
    const updatedQlist=qList.map((question:Question,i:number)=>(i===index ? {...question, answer:event}:question))
    setQlist(updatedQlist);
    let retString:string="";
    qList.forEach((question:Question)=> 
    retString=retString
    .concat(question.body.substring(0,question.body.indexOf("?")+1))
    .concat("\n")
    .concat(question.answer)
    .concat("\n\n"))
    setMSG(retString);
    //debugging purposes
  }

  //This will submit the API Request and get the assesment if succesful
  async function APIRequest(){
    console.log(msgtoAI);
    const key =localStorage.getItem("MYKEY");
    if (key){
      const openai = new OpenAI({
        apiKey:JSON.parse(key),
        dangerouslyAllowBrowser: true
      });
      setLoading(true);
      try{
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", 
              content: 
              `You are a career assessment advisor. I am providing you with a set of questions and the user will input the answers. Generate a detailed career assessment based on the insights from these responses.
               Provide a summary of the following points:
              Strengths
              Passions and Interests
              Ideal Work Environment
              Long-Term Career Path
              Values and Motivations
              Energy and Engagement
              Learning and Growth
              Based on these insights, recommend three specific career paths or job roles that best match the user’s profile, with reasons for each suggestion and actionable steps for pursuing these roles.
              Questions:
              1.What are your core strengths? (Think about skills, talents, or areas where you consistently excel, both professionally and personally.)
              2.What are your interests and passions? (What activities or subjects excite you and keep you engaged, even when you’re not being paid?)
              3.What work environment do you thrive in? (Do you prefer a structured or flexible environment? Do you work better alone or in teams?)
              4.What are your long-term career goals? (Where do you see yourself in 5, 10, or 20 years? Do you aspire to leadership roles, or would you prefer to be a specialist?)
              5.What are your values and priorities in a job? (Is work-life balance important to you? Do you seek financial security, creativity, or the opportunity to make a difference?)
              6.What type of work drains or energizes you? (What tasks or responsibilities feel exhausting versus those that feel exciting and fulfilling?)
              7.What is your preferred learning style? (Do you prefer learning by doing, studying theory, or through hands-on experience? How do you like to grow professionally?)
              Make sure to divide into 3 sections: Assesment Summary, Recommended Career paths, and Conclusion`},
            {
                role: "user",
                content: msgtoAI,
            },
        ],
        temperature:0.2,
        max_tokens:850
      });


      //debugging purposes
      console.log(completion.choices[0].message.content);
      if(completion.choices[0].message.content){
        localStorage.setItem("DetailedReport", JSON.stringify(completion.choices[0].message.content.split("###").map(segment => `${segment}`)));
      }
      else{
        return "An error ocurred and failed to retrived answer";
      }
    }
    finally{
      setResultsReady(true);
      setLoading(false);
      
    }
     
    }
    else{
      return "Plese input an API key to proceed.";
    }
  }

  //This funtion will handle the answers submission 
  //by creating a string of the questions and their respective answers
  function submitAnswers(){
    
    APIRequest();
    
  }

  function goToResults(){
    navigate("/DetailedResult")
    window.location.reload();
  }


    //displays the questions and a text input box to each to answer them 
    //using map function
    return(<div>
      {(allAnswered) ? <Confetti height={1.1*window.outerHeight} gravity={.7}  numberOfPieces={200}></Confetti> : null}
      <div className = "circularProgressBar">
      <CircularProgressBar answeredCount={answeredCount} totalQuestions={totalQuestions} />
      </div>
      
      

      {qList.map((question:Question,i:number) =>(
      (displayedQ===i)?
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
       : null
      ))}



       <div className = "detailed-question-nav">
        <Button className="detailed-prev-btn" onClick={handlePrevious} disabled={displayedQ===0}><BsArrowLeftCircleFill /> Prev</Button>
        <Button className="detailed-next-btn" onClick={handleNext} disabled={displayedQ===6}>Next <BsArrowRightCircleFill /></Button>
       </div>
      <div className = "detailed_submit_btn" >
      {(allAnswered) ?<Button disabled={loading} onClick={submitAnswers}>Submit your answers.</Button> : null}
      </div>
      {(loading) && <h1><div>Processing your answers and generating assessment</div><img src={gif} alt="loading..." /></h1>}
      
      {(resultsReady) ?<Button disabled={loading} onClick={goToResults}>See your Results</Button> : null}
    
    </div>
    );
}
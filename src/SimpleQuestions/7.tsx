// Question7.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { PlantProgressBar } from '../components/progressSimple';
import Confetti from 'react-confetti';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { OpenAI } from 'openai';
import gif from "../images/loading.gif"

type QuestionProps = {
    responses: { [key: string]: string };
    setResponses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

export function Question7({ responses, setResponses }: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    //Loading State that will help display loading animations
    const [loading,setLoading]=useState<boolean>(false);
    //State that holds if the report has finished generating
    const [resultsReady,setResultsReady]=useState<boolean>(false);
    const navigate = useNavigate();

    localStorage.setItem('questionNum', '7');
    let questionNum = parseInt(localStorage.getItem('questionNum') || "1");

    const handleFinish = async () => {
        setResponses(prev => ({ ...prev, question7: "I am motivated by the potential to earn a high salary and achieve financial security in my work. "+ answer }));
        const formattedResponses = Object.entries(responses)
        .map(([question, answer]) => `${question}: ${answer}`)
        .join("\n");
        async function APIRequest() {
            const key = localStorage.getItem("MYKEY");
            if (!key) {
              return;
            }
            try {
                setLoading(true);
              const openai = new OpenAI({
                apiKey: JSON.parse(key),
                dangerouslyAllowBrowser: true,
              });
    
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
                  { role: "user", content: formattedResponses },
                ],
                temperature: 0.2,
                max_tokens: 850,
              });
    
              if(completion.choices[0].message.content){
                localStorage.setItem("BasicReport", JSON.stringify(completion.choices[0].message.content.split("###").map(segment => `${segment}`)));
              }
              else{
                return "An error ocurred and failed to retrived answer";
              }
            }
            catch (error) {
                console.error("API request error:", error);
            }
            finally{
                setResultsReady(true);
                setLoading(false);
            } 
            
          }
    
        APIRequest();
        

    };
    
    

    function goToResults(){
        navigate("/SimpleQuestions/Results")
        window.location.reload();
      }

    const handlePrev = () => {
        setResponses(prev => ({...prev, question1:""}))
        navigate("/SimpleQuestions/Question6");
    };
    

    return (
        <div className = "simple_question">
            <h4 className = "question">7. I am motivated by the potential to earn a high salary and achieve financial security in my work. </h4>
            {options.map((option, i) => (
                <Form.Check
                className='answerButtons'
                    inline
                    key={i}
                    type="radio"
                    name="question7"
                    label={option}
                    onChange={(e) => setAnswer(e.target.value)}
                    checked={answer === option}
                    value={option}
                />
            ))}
            {(loading) && <h1><div>Processing your answers and generating assessment</div><img src={gif} alt="loading..." /></h1>}
            <br></br>
            <Button className = "next-btn" onClick={handlePrev}>
            <BsArrowLeftCircleFill/>
                Previous
            </Button>
            {(resultsReady) ?<Button disabled={loading} onClick={goToResults}>See your Results</Button> : <Button className = "submit-btn" disabled={!answer || loading} onClick={handleFinish}>Get Career Assessment <BsArrowRightCircleFill/></Button>}
            
            {answer !== '' ? PlantProgressBar({answer: answer, currentQuestion: questionNum}) 
            :
            PlantProgressBar({answer: answer, currentQuestion: questionNum -= 1})}
            {answer !== '' ? <Confetti height={1.1*window.outerHeight} gravity={.7}  numberOfPieces={200}></Confetti> : null}
            
            
            <br></br>
            
        </div>
    );
}
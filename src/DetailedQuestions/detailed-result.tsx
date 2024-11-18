import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './detailed-result.css';

// type DetailedResultprop={
//     report:string[];
// };
const StoredReport = localStorage.getItem("DetailedReport");
let Report = [""];
if (StoredReport){
  Report=JSON.parse(StoredReport);
}


export function DetailedResult( ):React.JSX.Element{
    console.log("This is the report:  " , Report)
    const [displayedSeg,setDisplayedSeg]=useState<number>(0);
    return <div>

        <div className = "detailed-answer-nav-bar">
        <Button className = "detailed-answer-navigation" onClick={()=>setDisplayedSeg(0)}>Assessment Summary</Button>
        <Button className = "detailed-answer-navigation" onClick={()=>setDisplayedSeg(1)}>Recommended Career Paths</Button>
        <Button className = "detailed-answer-navigation" onClick={()=>setDisplayedSeg(2)}>Conclusion</Button>
        </div>
        {Report.slice(1).map((segment:string,i:number) =>(
        (displayedSeg===i)?
          <div className = "universal">          {/* Section Header */}
          <h1>{segment.slice(0,segment.indexOf("\n"))}</h1>
          {/* Section Body */}
          {(segment.slice(segment.indexOf("\n")+1)
            .split("**")
              .map((subheader:string,segI:number)=>(
              //this ternary if will return true if the section is Recommended Career paths
              (i !== 1) ?
              //this ternary if will return true if the text is a subheader 
                (segI%2 === 1) ?
                <h3 className = 'sectionHead'>{subheader}</h3>
                :
                (segI === 0) ?
                  null
                  :
                  <div className = "answer">
                <span>{subheader.trim()} </span>
                </div>
              :
                //this ternary if will return true if the text is a subheader 
                (segI%2 === 1) ?
                  //this ternary if will return true if the text is a Career path
                  (subheader !== "Actionable Steps:" && subheader !== "Reason:" ) ?
                  <h3 className = 'sectionHead'>{subheader}</h3>
                  :
                  <h4 className = 'sectionHead'>{subheader}</h4>
                :
                <div className = "answer">
                <span>{subheader.replaceAll("-", "").trim()} </span>
                </div>
            )))}
        </div>
        : null
      ))}
      </div>

}


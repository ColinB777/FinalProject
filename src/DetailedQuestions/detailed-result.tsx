import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Result.css"
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
    const SectionedReport = Report.slice(1);

    



    const SummarySec ={
      header: SectionedReport[0].slice(0,SectionedReport[0].indexOf("\n")),

      subsections: {
          headers: 
          SectionedReport[0]
          .slice(SectionedReport[0].indexOf("\n")+2)
          .split("**")
          .filter((item,index) => (index !== 0) && item !== null)
          .filter((item,index) => !(index % 2)) ,

          bodies:
          SectionedReport[0]
          .slice(SectionedReport[0].indexOf("\n")+2)
          .split("**")
          .filter((item,index) => (index !== 0) && item !== null)
          .filter((item,index) => (index % 2)) ,
      }
    };

    const CareerPathsSec = {
      header: SectionedReport[1].slice(0,SectionedReport[1].indexOf("\n")),
      subsections: SectionedReport[1].slice(SectionedReport[1].indexOf("\n")+1)
      .split(/(?=\d+\.)/)
      .filter((item,index) => (index !== 0) && item !== null )
      .map((item:string) => item.replaceAll("-","").split("**").filter((item,index) => (index !== 0) && item.trim() !== ""))
    };

    const Conclusion = {
      header: SectionedReport[2].slice(0,SectionedReport[2].indexOf("\n")),

      subsections: SectionedReport[2]
      .slice(SectionedReport[2].indexOf("\n")+2)
      .split("**")
      .filter(item => item !== null)
    };
    console.log(CareerPathsSec.subsections[1])
    return <div>
        <Button onClick={()=>setDisplayedSeg(0)}>Assessment Summary</Button>
        <Button onClick={()=>setDisplayedSeg(1)}>Recommended Career Paths</Button>
        <Button onClick={()=>setDisplayedSeg(2)}>Conclusion</Button>
        {Report.slice(1).map((segment:string,i:number) =>(
        (displayedSeg===i)?
        <div>
          {/* Section Header */}
          <h1>{segment.slice(0,segment.indexOf("\n"))}</h1>
          {/* Section Body */}
          {(segment.slice(segment.indexOf("\n")+1)
            .split("**")
              .map((subheader:string,segI:number)=>(
              //this ternary if will return true if the section is Recommended Career paths
              (i !== 1) ?
              //this ternary if will return true if the text is a subheader 
                (segI%2 === 1) ?
                <h3 style={{whiteSpace: "break-spaces" , margin:25  }}>{subheader}</h3>
                :
                <span  style={{whiteSpace: "break-spaces"}}>{subheader.trim()} </span>
              :
                //this ternary if will return true if the text is a subheader 
                (segI%2 === 1) ?
                  //this ternary if will return true if the text is a Career path
                  (subheader !== "Actionable Steps:" && subheader !== "Reason:" ) ?
                  <h3 style={{whiteSpace: "break-spaces" , marginTop:25,marginBottom:-20  }}>{subheader}</h3>
                  :
                  <h4 style={{whiteSpace: "break-spaces" , margin:25  }}>{subheader}</h4>
                :
                <span  style={{whiteSpace: "break-spaces"}}>{subheader.replaceAll("-", "").trim()} </span>
            )))}
        </div>
        : null
      ))}
      </div>

}


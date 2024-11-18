import React, { useState } from "react";
import { Button } from "react-bootstrap";

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


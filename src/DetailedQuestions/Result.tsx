import React, { useState } from "react";
import { Button } from "react-bootstrap";

type DetailedResultprop={
    report:string[];
};
export function DetailedResult(Report: DetailedResultprop ):React.JSX.Element{
    const [displayedSeg,setDisplayedSeg]=useState<number>(0);

    
    return <div>
        <Button onClick={()=>setDisplayedSeg(0)}>Assessment Summary</Button>
        <Button onClick={()=>setDisplayedSeg(1)}>Recommended Career Paths</Button>
        <Button onClick={()=>setDisplayedSeg(2)}>Conclusion</Button>
        {Report.report.slice(1).map((segment:string,i:number) =>(
        (displayedSeg===i)?
        <div>
          <h1 style={{marginBottom:-30}}>{segment.slice(0,segment.indexOf("\n"))}</h1>
          <span  style={{whiteSpace: "break-spaces"}}>{(segment.slice(segment.indexOf("\n")))}</span>
        </div>
        : null
      ))}
      </div>

}


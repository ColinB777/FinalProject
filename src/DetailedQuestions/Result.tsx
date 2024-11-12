import React from "react";

type DetailedResultprop={
    report:string[];
};
export function DetailedResult(Report: DetailedResultprop ):React.JSX.Element{
    return <div>{Report.report.slice(1).map((segment:string,i:number) =>(
        <div>
          <h1 style={{marginBottom:-30}}>{segment.slice(0,segment.indexOf("\n"))}</h1>
          <span  style={{whiteSpace: "break-spaces"}}>{(segment.slice(segment.indexOf("\n")))}</span>
        </div>
      ))}</div>

}


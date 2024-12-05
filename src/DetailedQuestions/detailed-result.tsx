import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../Result.css"

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
    console.log(Report[1]);

    



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

      <div className = "detailed-result-nav-bar">
        <Button className = "detailed-result-nav-btn" onClick={()=>setDisplayedSeg(0)}>Assessment Summary</Button>
        <Button className = "detailed-result-nav-btn" onClick={()=>setDisplayedSeg(1)}>Recommended Career Paths</Button>
        <Button className = "detailed-result-nav-btn" onClick={()=>setDisplayedSeg(2)}>Conclusion</Button>
      </div>

      {(displayedSeg === 0) ? <div>
          <h1>{SummarySec.header}</h1>
          <body className="horizontal-container">
            {SummarySec.subsections.headers.map((header:string,index:number) => 
            (<div className="component">
              <h3>{header}</h3>
              <span>{SummarySec.subsections.bodies[index]}</span>
            </div>)
          ) }
            </body>
        </div> : null}


        {(displayedSeg === 1) ? <div>
          <h1>{CareerPathsSec.header}</h1>
          <div style={{whiteSpace: "break-spaces"}}>
            {CareerPathsSec.subsections.map((Career:string[]) =>
              (<div>
                <h3>{Career[0]}</h3>
                <h4>{Career[1]}</h4>
                <span>{Career[2]}</span>
                <h4>{Career[3]}</h4>
                <span>{Career[4]}</span>
              </div>
              )
            )}
            </div>
        </div> : null}
        

        {(displayedSeg === 2) ? <div>
          <h1>{Conclusion.header}</h1>
          <body style={{whiteSpace: "break-spaces"}}>{Conclusion.subsections}</body>
        </div> : null}
      </div>

}

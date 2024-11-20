import { Button } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';
import TypewriterComponent from './components/Typewriter';

export function Homepage(){
    return <div>
        <div id = "Typewriter">
      <TypewriterComponent />
      </div>

        <div className = "description_flexbox" >
        <h3 className = "differenceTitle">What is The Difference Between the Simple and Detailed Quiz?</h3>

        <div className = "inner_description_flexbox">
        <h4 className = "description-title">Basic</h4>
        <p>The basic career assessment is a compact, quicker version of the quiz 
          which will allow users to get a narrowed down answer based on the preferences 
          of the user through multiple choice.</p>
        <Button className = "Career-Btn">
          <Link to="/basic_quiz">Start Simple Quiz!</Link>
        </Button> 
        </div>


        <div className = "inner_description_flexbox">
        <h4 className = "description-title">Detailed</h4>
        <p>The Detailed career assessment is an input based  quiz 
          which will allow users to express their answers with as many sentences 
          the might need. Then receive a tailored report from them made by AI assistant</p>
          
          <Button className = "Career-Btn">
            <Link to="/detailed_quiz" >Start Detailed Quiz!</Link>
          </Button>
        
        </div>
      </div> 
    </div>
}
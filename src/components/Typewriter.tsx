import React from 'react';
import Typewriter from 'typewriter-effect';
import './Typewriter.css';

const TypewriterComponent: React.FC = () => {
  return (
    <div >
      <div className="typewriterMain">
      <Typewriter 
        options={{
          strings: [" Let your strengths, interests, and personality guide you to a career!", "Receive personalized career suggestions with tips on skills to develop paths to explore!"],
          autoStart: true,
          loop: true,
          delay: 17.5,
          deleteSpeed: 3,
          
        }}
        
      />
      </div>
    </div>
  );
};

export default TypewriterComponent;

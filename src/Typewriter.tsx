import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent: React.FC = () => {
  return (
    <div>
      <h1 style ={{paddingTop:20}}>Finding You a New Career</h1>
      <Typewriter
        options={{
          strings: [" Career Quiz helps you find career paths that align with your strengths, interests, and personality. Answer a few quick questions to discover fields that match your unique skills.", "Based on your responses, you’ll receive personalized career suggestions, along with tips on skills to develop and education paths to explore."],
          autoStart: true,
          loop: true,
          delay: 25,
          deleteSpeed: 100,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;

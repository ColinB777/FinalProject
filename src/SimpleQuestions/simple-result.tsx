import React, { useEffect, useState } from 'react';
import { OpenAI } from 'openai';

type ResultsProps = {
  responses: { [key: string]: string };
};

export function Results({ responses }: ResultsProps) {
  const [report, setReport] = useState<string>("");
 
  

  useEffect(() => {
    async function APIRequest() {
      const key = localStorage.getItem("MYKEY");
      if (!key) {
        setReport("Please input an API key to proceed.");
        return;
      }

      // Format responses for OpenAI
      const formattedResponses = Object.entries(responses)
        .map(([question, answer]) => `${question}: ${answer}`)
        .join("\n");

        console.log(formattedResponses);

      try {
        const openai = new OpenAI({
          apiKey: JSON.parse(key),
          organization: "org-EbrOwGpWn6qnLdFwzPY4qAsR",
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

        setReport(completion.choices?.[0]?.message?.content ?? "Error: Failed to retrieve the assessment.");
      } catch (error) {
        setReport("There was an error fetching the report.");
        console.error("API request error:", error);
      }
    }

    APIRequest();
  }, [responses]);

  return (
    <div>
      <h1>Career Assessment Report</h1>
      <p>{report}</p>
    </div>
  );
}

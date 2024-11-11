import React, { useEffect, useState } from 'react';
import { OpenAI } from 'openai';

type ResultsProps = {
  responses: { [key: string]: string };
};

export default function Results({ responses }: ResultsProps) {
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
            { role: "system", content: "You are a career assessment advisor..." },
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

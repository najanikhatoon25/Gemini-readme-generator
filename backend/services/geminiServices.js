import {GoogleGenAI} from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if(!apiKey){
    throw new Error("GEMINI_API_KEY is missing in .env")

}
const ai = new GoogleGenAI ({apiKey})

export const generateReadme = async ({
    projectName,
    description,
    features,
    technologies,

}) => {
      const prompt = `
You are a technical documentation expert.

Generate a professional README.md for this project.

Project Name: ${projectName}
Description:${description}           
Key Features:${features.map((feature) => `- ${feature}`).join("\n")}
Technologies:${technologies.join(", ")}


Include these sections:
1. Project Title
2. Overview
3. Features
4. Technologies Used
5. Installation
6. Usage
7. Future Improvements

Rules:
- Return Markdown only.
- Do not use HTML.
- Do not invent commands, environment variables,
  or features that were not provided.
- If information is missing, use a clear placeholder.
`;

const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
})
    
const readme = response.text?.trim()
    
if (!readme){
    throw new Error ("Gemini returned an empty response")
}

return readme;

}
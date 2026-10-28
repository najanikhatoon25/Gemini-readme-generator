const API_URL =
  "https://gemini-readme-generator.onrender.com/api/readme/generate";
  export const generateReadme = async (projectData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to generate README.");
  }

  return data.readme;
};

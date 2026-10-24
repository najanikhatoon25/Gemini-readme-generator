const API_URL= "http://localhost:5000/api/readme/generate";

export const generateReadme = async(projectData) =>{
    const response = await fetch(API_URL, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body: JSON.stringify(projectData)
    });

    const data = await response.json()

    if(!response.ok || !data.success){
        throw new Error(data.message || "failed to generate Readme")    
    }

    return data.readme;
}
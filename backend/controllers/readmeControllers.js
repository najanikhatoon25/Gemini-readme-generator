import { generateReadme } from "../services/geminiServices.js";
export const createReadme = async(req,res) => {
    try{
        const{
            projectName,
            description,
            features,
            technologies,
        }= req.body;

    if (
        typeof projectName !== "string" || 
        !projectName.trim()||
        typeof description !== "string" ||
        !description.trim()
    ){
        return res.status(400).json({
        success: false,
        message: "Project name and description are required",
        })
    }

    if(
        !Array.isArray(features) ||
        !features.every(
            (feature) => 
        typeof feature === "string" && feature.trim()
        )
    ){
        return res.status(400).json({
            success: false,
            message: "features must be an array of text values"
        })
    }
    const safeTechnologies = technologies ?? [];
    
    if(
        !Array.isArray(safeTechnologies) || 
        ! safeTechnologies.every(
            (technology) =>
        typeof technology === "string" && technology.trim()
        )
    ){
        return res.status(400).json({
        success:false,
        message:  "Technologies must be an array of text values",
        })
    }
    const readme = await generateReadme({
        projectName:projectName.trim(),
        description:description.trim(),
        features: features.map((feature) => feature.trim()),
        technologies:safeTechnologies.map((technology) => technology.trim())
    })

    return res.status(200).json({
     success: true,
     message: "README generated successfully",
     readme,
    });
    }catch(error){
    console.error("README generation failed:", error.message);

    return res.status(500).json({
        success: false,
        message: "Unable to generate README. Please try again.",
    })
    }
}

from fastapi import FastAPI, UploadFile, File
from parser import extract_text_from_pdf, extract_skills, extract_experience

app = FastAPI(title="Hirelytics Resume Parser")

@app.post("/parse-resume")
async def parse_resume(file: UploadFile = File(...)):
    if not file.filename.endswith(".pdf"):
        return {"error": "Only PDF files are allowed"}

    file_bytes = await file.read()
    text = extract_text_from_pdf(file_bytes)

    skills = extract_skills(text)
    experience = extract_experience(text)

    return {
        "fileName": file.filename,
        "skills": skills,
        "experience_years": experience,
        "text_length": len(text)
    }

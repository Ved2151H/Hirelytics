import fitz  # PyMuPDF
import re

def extract_text_from_pdf(file_bytes):
    doc = fitz.open(stream=file_bytes, filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text


def extract_skills(text):
    SKILLS = [
        "python", "java", "node", "mongodb", "sql",
        "machine learning", "deep learning",
        "react", "express", "docker", "aws"
    ]
    text_lower = text.lower()
    found = [skill for skill in SKILLS if skill in text_lower]
    return list(set(found))


def extract_experience(text):
    match = re.search(r"(\d+)\+?\s+years?", text.lower())
    if match:
        return match.group(1)
    return "Not specified"

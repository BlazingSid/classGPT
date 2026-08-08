import os
import fitz
from app.services.vector_service import store_chunks

from app.services.chunk_service import chunk_text
from app.services.vector_service import store_chunks

UPLOAD_FOLDER = "uploads"


def save_pdf(file):
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())

    return file_path


def extract_text(file_path):
    document = fitz.open(file_path)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    return text


def process_pdf(file):
    file_path = save_pdf(file)

    text = extract_text(file_path)

    chunks = chunk_text(text)
    
    stored_chunks = store_chunks(
        file.filename,
        chunks
    )

    return {
        "filename": file.filename,
        "characters": len(text),
        "chunks": len(chunks),
        "stored_chunks": stored_chunks,
        "status": "PDF processed successfully"
    }
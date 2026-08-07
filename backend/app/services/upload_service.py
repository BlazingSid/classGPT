import os
import fitz
from app.services.vector_service import store_chunks

from app.services.chunk_service import chunk_text

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
    
    store_chunks(file.filename, chunks)

    return {
        "filename": file.filename,
        "characters": len(text),
        "chunks": len(chunks),
        "preview": chunks[0] if chunks else ""
    }
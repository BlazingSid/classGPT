from fastapi import APIRouter, UploadFile, File

from app.services.upload_service import save_pdf, extract_text

router = APIRouter(
    prefix="/upload",
    tags=["Files"]
)


@router.post("/")
async def upload_pdf(file: UploadFile = File(...)):
    file_path = save_pdf(file)

    text = extract_text(file_path)

    return {
        "filename": file.filename,
        "characters": len(text),
        "preview": text[:500]
    }
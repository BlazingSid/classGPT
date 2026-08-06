from fastapi import APIRouter, UploadFile, File

from app.services.upload_service import process_pdf

router = APIRouter(
    prefix="/upload",
    tags=["Files"]
)


@router.post("/")
async def upload_pdf(file: UploadFile = File(...)):
    return process_pdf(file)
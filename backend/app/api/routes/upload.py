from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix="/upload", tags=["Upload"])


@router.post("/")
async def upload_file(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "content_type": file.content_type
    }
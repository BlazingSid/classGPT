from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.notice import NoticeCreate
from app.services.notice_service import create_notice, get_all_notices

router = APIRouter(
    prefix="/notices",
    tags=["Notices"]
)


@router.get("/")
def get_notices(db: Session = Depends(get_db)):
    return get_all_notices(db)


@router.post("/")
def add_notice(
    notice: NoticeCreate,
    db: Session = Depends(get_db)
):
    return create_notice(db, notice)
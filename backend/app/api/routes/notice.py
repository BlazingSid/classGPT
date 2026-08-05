from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.notice import NoticeCreate
from app.services.notice_service import (
    create_notice,
    get_all_notices,
    delete_notice,
)

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


@router.delete("/{notice_id}")
def remove_notice(
    notice_id: int,
    db: Session = Depends(get_db)
):
    notice = delete_notice(db, notice_id)

    if notice is None:
        raise HTTPException(
            status_code=404,
            detail="Notice not found"
        )

    return {
        "message": "Notice deleted successfully."
    }


@router.get("/")
def get_notices(db: Session = Depends(get_db)):
    return get_all_notices(db)


@router.post("/")
def add_notice(
    notice: NoticeCreate,
    db: Session = Depends(get_db)
):
    return create_notice(db, notice)
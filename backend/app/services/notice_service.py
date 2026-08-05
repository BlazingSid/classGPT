from sqlalchemy.orm import Session

from app.models.notice import Notice
from app.schemas.notice import NoticeCreate


def create_notice(db: Session, notice: NoticeCreate):
    db_notice = Notice(
        title=notice.title,
        message=notice.message,
        date=notice.date
    )

    db.add(db_notice)
    db.commit()
    db.refresh(db_notice)

    return db_notice


def get_all_notices(db: Session):
    return db.query(Notice).all()


def delete_notice(db: Session, notice_id: int):
    notice = db.query(Notice).filter(Notice.id == notice_id).first()

    if notice is None:
        return None

    db.delete(notice)
    db.commit()

    return notice
from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class Notice(Base):
    __tablename__ = "notices"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    title: Mapped[str] = mapped_column(String(255))

    message: Mapped[str] = mapped_column(String(1000))

    date: Mapped[str] = mapped_column(String(50))
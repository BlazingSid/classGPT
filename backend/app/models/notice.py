from re import S
import string

from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base

class Notice(Base):
    __tablename__ = "notice"

    id:Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    tittle: Mapped[str] = mapped_column(String)
    message: Mapped[str] = mapped_column(String)
    date: Mapped[str] = mapped_column(String)

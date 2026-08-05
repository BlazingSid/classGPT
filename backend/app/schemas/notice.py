from pydantic import BaseModel


class NoticeCreate(BaseModel):
    title: str
    message: str
    date: str


class NoticeResponse(BaseModel):
    id: int
    title: str
    message: str
    date: str

    class Config:
        from_attributes = True
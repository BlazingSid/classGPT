from fastapi import FastAPI

from app.database.database import engine
from app.database.base import Base
from app.models.notice import Notice

from app.api.routes.chat import router as chat_router
from app.api.routes.upload import router as upload_router
from app.api.routes.subject import router as subjects_router
from app.api.routes.notice import router as notices_router
from app.api.routes.timetable import router as timetable_router 
from app.api.routes.health import router as health_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="ClassGPT API",
    version="0.1.0",
    description="AI-powered classroom assistant API by Rajnandinee Havaldar and Shahid Attar"
)

app.include_router(chat_router)
app.include_router(upload_router)
app.include_router(subjects_router)
app.include_router(notices_router)
app.include_router(timetable_router)

@app.get("/")
def root():
    return {
    "app": "ClassGPT",
    "version": "0.1.0",
    "status": "running",
    "docs": "/docs"   
}
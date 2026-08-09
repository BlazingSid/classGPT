from fastapi import APIRouter

from app.services.chat_service import chat_with_classgpt


router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.get("/")
def chat_get():
    return {
        "message": "ClassGPT chat endpoint is working."
    }


@router.post("/")
def chat(question: str):
    return chat_with_classgpt(question)
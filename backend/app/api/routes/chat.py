from fastapi import APIRouter 

router = APIRouter(prefix="/chat", tags=["Chat"])


@router.post("/")
def chat():
    return {
        "answer": "Hello! I'm ClassGPT 🤖"
    }
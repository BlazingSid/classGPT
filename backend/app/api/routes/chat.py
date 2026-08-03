from fastapi import APIRouter 

router = APIRouter(prefix="/chat", tags=["chat"])


@router.post("/")
def chat():
    return {
        "answer": "Hello! I'm ClassGPT 🤖"
    }
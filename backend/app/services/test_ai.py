from app.services.ai_service import generate_answer


answer = generate_answer(
    "What is Python?",
    "Python is a high-level programming language."
)

print(answer)
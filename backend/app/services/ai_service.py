import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY was not found in .env")

client = genai.Client(
    api_key=api_key
)


def generate_answer(question: str, context: str):
    prompt = f"""
You are ClassGPT, an AI classroom assistant.

Answer the student's question using ONLY the provided classroom material.

If the answer cannot be found in the provided material, say:
"I couldn't find that information in the uploaded classroom material."

Do not invent information.

CLASSROOM MATERIAL:
{context}

STUDENT QUESTION:
{question}

Answer clearly and concisely.
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    return response.text
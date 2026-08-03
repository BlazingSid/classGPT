from fastapi import FastAPI

app = FastAPI(
    title="ClassGPT API",
    version="1.0.0",
    description="Backend API for ClassGPT",
)

@app.get("/")
def root():
    return {
        "message": "Welcome to ClassGPT API by Shahid and Rajnandinee 🚀"
    }
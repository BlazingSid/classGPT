from fastapi import APIRouter

router = APIRouter(
    prefix="/subjects",
    tags=["Subjects"]
)


@router.get("/")
def get_subjects():
    return {
        "subjects": [
            "Python",
            "DBMS",
            "Mathematics"
        ]
    }


@router.post("/")
def add_subject():
    return {
        "status": "success",
        "message": "Subject added successfully."
    }
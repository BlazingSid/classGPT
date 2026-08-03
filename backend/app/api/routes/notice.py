from fastapi import APIRouter

router = APIRouter(prefix="/notices", tags=["Notice"])

@router.get("/")
def get_notices():
    return {
        "notices": [
            {
                "id": 1,
                "title": "DBMS Lecture Cancelled",
                "message": "Today's DBMS lecture has been cancelled.",
                "date": "2026-08-03"
            }
        ]
    }

@router.post("/")
def add_notice():
    return {
        "status": "success",
        "message": "Notice added successfully."
    }

@router.delete("/{notice_id}")
def delete_notice(notice_id: int):
    return {
        "status": "success",
        "message": f"Notice {notice_id} deleted successfully"
    }


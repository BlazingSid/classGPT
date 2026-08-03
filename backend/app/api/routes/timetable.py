from fastapi import APIRouter

router = APIRouter(prefix="/timetable", tags=["Timetable"])


@router.get("/")
def get_timetable():
    return {
        "timetable": [
            {
                "id": 1,
                "subject": "Python",
                "faculty": "Mrs. Gaikwad",
                "room": "Room 419",
                "day": "Monday",
                "time": "09:00 - 10:00"
            },
            {
                "id": 2,
                "subject": "DBMS",
                "faculty": "Mrs. Smith",
                "room": "Room 304",
                "day": "Monday",
                "time": "10:15 - 11:15"
            }
        ]
    }


@router.get("/today")
def get_today_timetable():
    return {
        "today": [
            {
                "subject": "Python",
                "faculty": "Mr. John",
                "room": "Lab 205",
                "time": "09:00 - 10:00"
            },
            {
                "subject": "DBMS",
                "faculty": "Mrs. Smith",
                "room": "Room 304",
                "time": "10:15 - 11:15"
            }
        ]
    }


@router.post("/")
def add_timetable():
    return {
        "status": "success",
        "message": "Timetable updated successfully."
    }
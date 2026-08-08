from fastapi import APIRouter

from app.services.vector_service import search_chunks

router = APIRouter(
    prefix="/search",
    tags=["Search"]
)


@router.get("/")
def search(query: str, n_results: int =3):
    return search_chunks(
        query,
        n_results   
    )
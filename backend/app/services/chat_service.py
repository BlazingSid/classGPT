from app.services.vector_service import search_chunks
from app.services.ai_service import generate_answer


def chat_with_classgpt(question: str):
    """
    RAG pipeline:
    Question
        ↓
    ChromaDB semantic search
        ↓
    Top 3 relevant chunks
        ↓
    Gemini
        ↓
    Answer
    """

    # 1. Search ChromaDB
    relevant_chunks = search_chunks(
        query=question,
        n_results=3
    )

    # 2. No relevant material found
    if not relevant_chunks:
        return {
            "question": question,
            "answer": "I couldn't find that information in the uploaded classroom material.",
            "sources_used": 0
        }

    # 3. Combine retrieved chunks into context
    context = "\n\n---\n\n".join(relevant_chunks)

    # 4. Send question + context to Gemini
    answer = generate_answer(
        question=question,
        context=context
    )

    # 5. Return clean response
    return {
        "question": question,
        "answer": answer,
        "sources_used": len(relevant_chunks)
    }
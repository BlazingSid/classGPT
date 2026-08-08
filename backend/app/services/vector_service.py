import chromadb
from chromadb.utils import embedding_functions


client = chromadb.PersistentClient(
    path="chroma_db"
)


embedding_function = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"
)


collection = client.get_or_create_collection(
    name="classgpt_notes",
    embedding_function=embedding_function
)


def store_chunks(filename: str, chunks: list[str]):
    ids = [
        f"{filename}_{i}"
        for i in range(len(chunks))
    ]

    metadatas = [
        {
            "filename": filename,
            "chunk_index": i
        }
        for i in range(len(chunks))
    ]

    collection.add(
        ids=ids,
        documents=chunks,
        metadatas=metadatas
    )

    return len(chunks)


def search_chunks(query: str, n_results: int = 3):
    results = collection.query(
        query_texts=[query],
        n_results=n_results
    )

    return results
import chromadb

from chromadb.utils import embedding_functions

client = chromadb.PersistentClient(path="chroma_db")

collection = client.get_or_create_collection(
    name="classgpt_notes",
    embedding_function=embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name="all-MiniLM-L6-v2"
    )
)


def store_chunks(filename: str, chunks: list[str]):
    ids = []

    metadatas = []

    for i, chunk in enumerate(chunks):
        ids.append(f"{filename}_{i}")

        metadatas.append({
            "filename": filename,
            "chunk": i
        })

    collection.add(
        ids=ids,
        documents=chunks,
        metadatas=metadatas
    )


def search_chunks(query: str, n_results: int = 3):
    results = collection.query(
        query_texts=[query],
        n_results=n_results
    )

    return results
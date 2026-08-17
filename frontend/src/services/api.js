const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

async function parseResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export async function askQuestion(question) {
  const trimmedQuestion = question.trim();

  if (!trimmedQuestion) {
    throw new Error("Please enter a question.");
  }

  const response = await fetch(
    `${API_BASE_URL}/chat/?question=${encodeURIComponent(trimmedQuestion)}`,
    {
      method: "POST",
    }
  );

  const data = await parseResponse(response);

  if (!response.ok) {
    const message =
      typeof data === "object" && data?.detail
        ? data.detail
        : "The chat request failed.";

    throw new Error(message);
  }

  return data;
}

export async function uploadPdf(file) {
  if (!file) {
    throw new Error("Please select a PDF.");
  }

  if (file.type !== "application/pdf") {
    throw new Error("Only PDF files are supported.");
  }

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/upload/`, {
    method: "POST",
    body: formData,
  });

  const data = await parseResponse(response);

  if (!response.ok) {
    const message =
      typeof data === "object" && data?.detail
        ? data.detail
        : "PDF upload failed.";

    throw new Error(message);
  }

  return data;
}

export async function getNotices() {
  const response = await fetch(`${API_BASE_URL}/notices/`);

  const data = await parseResponse(response);

  if (!response.ok) {
    throw new Error("Unable to load notices.");
  }

  return data;
}

export { API_BASE_URL };
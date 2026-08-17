import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNotices } from "../services/api.js";

function Notices() {
  const navigate = useNavigate();

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadNotices() {
      try {
        const data = await getNotices();

        const list = Array.isArray(data)
          ? data
          : data?.notices || [];

        setNotices(list);
      } catch (requestError) {
        setError(
          requestError.message || "Unable to load notices."
        );
      } finally {
        setLoading(false);
      }
    }

    loadNotices();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">

      <div className="mx-auto max-w-4xl">

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mb-8 text-sm text-slate-400 hover:text-white"
        >
          ← Dashboard
        </button>

        <h1 className="text-3xl font-bold">
          Notices
        </h1>

        <p className="mt-2 text-slate-400">
          Latest classroom announcements.
        </p>

        {loading && (
          <p className="mt-8 text-slate-400">
            Loading notices...
          </p>
        )}

        {error && (
          <div className="mt-8 rounded-xl border border-red-800 bg-red-950/40 p-4 text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && notices.length === 0 && (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-400">
            No notices available.
          </div>
        )}

        <div className="mt-8 space-y-4">

          {notices.map((notice, index) => (
            <article
              key={notice.id ?? index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >

              <h2 className="text-lg font-semibold">
                {notice.title ?? "Classroom Notice"}
              </h2>

              <p className="mt-2 whitespace-pre-wrap text-slate-300">
                {notice.content ??
                  notice.message ??
                  notice.description ??
                  ""}
              </p>

            </article>
          ))}

        </div>

      </div>
    </main>
  );
}

export default Notices;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          ClassGPT
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Your AI-powered classroom assistant
        </p>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />

          <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:150ms]" />

          <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </main>
  );
}

export default Splash;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    navigate("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <button
          type="button"
          onClick={() => navigate("/welcome")}
          className="mb-8 text-sm text-slate-400 hover:text-white"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Login to your ClassGPT account
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          New to ClassGPT?{" "}

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-400 hover:text-blue-300"
          >
            Create an account
          </button>
        </p>

      </div>
    </main>
  );
}

export default Login;
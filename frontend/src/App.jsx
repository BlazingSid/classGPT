import { Navigate, Route, Routes } from "react-router-dom";

import Splash from "./pages/Splash.jsx";
import Welcome from "./pages/Welcome.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Chat from "./pages/Chat.jsx";
import Notes from "./pages/Notes.jsx";
import Notices from "./pages/Notices.jsx";
import Timetable from "./pages/Timetable.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />

      <Route path="/notes" element={<Notes />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/timetable" element={<Timetable />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
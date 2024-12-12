import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Events from "./pages/Events";
import CreateEventPage from "./pages/CreateEventPage";

const App = () => {
  const isAdmin = true;
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {isAdmin && (
          <Route path="/admin" element={<Admin />}>
          </Route>
        )}
        <Route path="/events" element={<Events />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

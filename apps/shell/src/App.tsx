import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import { Router } from "./routes/Router";
export default function App() {
  const [route, setRoute] = useState("mfe1");

  return (
    <div className="flex">
      <Sidebar onNavigate={setRoute} />
      <main className="flex-1 p-4">
        <Router route={route} />
      </main>
    </div>
  );
}
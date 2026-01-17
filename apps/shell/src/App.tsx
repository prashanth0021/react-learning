import { useState } from "react";
import { Sidebar } from "./layout/Sidebar";
import { Router } from "./routes/Router";

export default function App() {
  const [route, setRoute] = useState("mfe1");
  
  return (
    <div className="flex h-screen">
      <Sidebar active={route} onNavigate={setRoute} />
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Router route={route} />
      </main>
    </div>
  );
}

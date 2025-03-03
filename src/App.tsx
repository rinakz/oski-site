import Chat from "./components/Chat";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { Routes, Route, HashRouter } from "react-router-dom";

export function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

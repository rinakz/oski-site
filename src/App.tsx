import { Header } from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PATH } from "./routes/PATH";
import Map from "./components/Map";
import { Auth } from "./components/auth/auth";
import { Profile } from "./components/profile/profile";
import Main from "./components/main/main";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path={PATH.Home} element={<Main />} />
          <Route path={PATH.Map} element={<Map />} />
          <Route path={PATH.Auth} element={<Auth />} />
          <Route path={PATH.Profile} element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

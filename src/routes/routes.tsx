import { FC, useEffect } from "react";
import {
  Routes as MainRouter,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import { Auth } from "../components/auth/auth";
import Map from "../components/map/map";
import { Header } from "../components/header/header";
import { Profile } from "../components/profile/profile";
import Main from "../components/main/main";
import { PATH } from "../constants/path";
import { Login } from "../components/login/login";
import { Tour } from "../components/tour";
export const Routes: FC = () => {
  // const initData = window.Telegram.WebApp;

  return (
    <BrowserRouter>
      <Header />
      <main>
        <MainRouter>
          <Route path={PATH.Home} element={<Main />} />
          <Route path={PATH.Map} element={<Map />} />

          <Route path={PATH.Auth} element={<Auth />} />
          <Route path={PATH.Login} element={<Login />} />

          <Route path={PATH.Profile} element={<Profile />} />
        </MainRouter>
      </main>
    </BrowserRouter>
  );
};

import { FC } from "react";
import { Routes as MainRouter, Route, BrowserRouter } from "react-router-dom";
import { PATH } from "./path";
import { Auth } from "../components/auth/auth";
import Map from "../components/map/map";
import { Header } from "../components/header/header";
import { Profile } from "../components/profile/profile";
import Main from "../components/main/main";
export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <MainRouter>
          <Route path={PATH.Home} element={<Main />} />
          <Route path={PATH.Map} element={<Map />} />
          <Route path={PATH.Auth} element={<Auth />} />
          <Route path={PATH.Profile} element={<Profile />} />
        </MainRouter>
      </main>
    </BrowserRouter>
  );
};

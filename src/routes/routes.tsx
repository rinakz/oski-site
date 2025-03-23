import { FC } from "react";
import { Routes as MainRouter, Route, BrowserRouter } from "react-router-dom";
import { Path } from "~routes/index";
import { Header } from "~components/header/header";
import Main from "~components/main/main";
import Map from "~components/map/map";
import { Auth } from "~components/auth/auth";
import { Profile } from "~components/profile/profile";

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <MainRouter>
          <Route path={Path.Home} element={<Main />} />
          <Route path={Path.Map} element={<Map />} />
          <Route path={Path.Auth} element={<Auth />} />
          <Route path={Path.Profile} element={<Profile />} />
        </MainRouter>
      </main>
    </BrowserRouter>
  );
};

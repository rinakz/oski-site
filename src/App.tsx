import React from "react";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./components/test";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

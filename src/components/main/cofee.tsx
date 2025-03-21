import React from "react";
import { LayoutPage } from "../general/LayoutPage";
import stls from "../styles/components/Main.module.sass";

export default function Coffee() {
  return (
    <LayoutPage>
      <div className={stls.servicesContainer}>
        <div>
          <div className={stls.serviceTitle}>
            <h1>Dog-friendly места</h1>
            <img src="second-main.png" alt="coffee" />
          </div>
          <p>
            📌 Отмечайте на карте dog-friendly кафе и площадки
            <br />
            <br />
            📌 Делитесь своими находками и помогайте другим сиба-ину находить
            лучшие места для отдыха и прогулок
            <br />
            <br />
            📌 Чекиньтесь на площадках и в кафе, чтобы другие пользователи
            видели, где сейчас тусуются сибы!
          </p>
        </div>
      </div>
    </LayoutPage>
  );
}

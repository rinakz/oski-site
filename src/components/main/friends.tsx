import React from "react";
import { LayoutPage } from "../general/LayoutPage";
import stls from "../styles/components/Main.module.sass";

export default function Friends() {
  return (
    <LayoutPage>
      <div className={stls.servicesContainer}>
        <div>
          <div className={stls.serviceTitle}>
            <h1>Найди друзей для своего сиба-ину!</h1>
            <img width="230px" src="friends.png" alt="friends" />
          </div>
          <div>
            <p>
              📌 Добавьте своего сиба-ину на карту и найдите других владельцев
              сиба поблизости!
            </p>
            <br />
            <p>
              📌 Устраивайте совместные прогулки, делитесь советами и заводите
              новых друзей для себя и своего питомца
            </p>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

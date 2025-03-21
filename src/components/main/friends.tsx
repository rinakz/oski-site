import React, { useEffect, useRef, useState } from "react";
import { LayoutPage } from "../general/LayoutPage";
import stls from "../styles/components/Main.module.sass";

export default function Friends() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null); // Создаем реф для элемента

  const handleScroll = () => {
    if (elementRef.current) {
      const position = elementRef?.current?.getBoundingClientRect();
      // Проверяем, виден ли элемент в области просмотра
      if (position.top < window.innerHeight && position.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll); // Удаляем обработчик, чтобы избежать повторного вызова
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Удаляем обработчик при размонтировании компонента
    };
  }, []);

  return (
    <LayoutPage>
      <div
        ref={elementRef}
        className={
          isVisible ? stls.servicesContainer : stls.servicesContainerHidden
        }
      >
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

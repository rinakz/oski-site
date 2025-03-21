import { LayoutPage } from "../general/LayoutPage";
import Footer from "../Footer";
import stls from "../styles/components/Main.module.sass";
import { useEffect, useRef, useState } from "react";

export default function Community() {
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
        style={{
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          ref={elementRef}
          style={{ width: "initial", height: "-webkit-fill-available" }}
          className={
            isVisible ? stls.servicesContainer : stls.servicesContainerHidden
          }
        >
          <div>
            <div className={stls.serviceTitle}>
              <h1 style={{ minWidth: "40%" }}>Все сибы на одной карте!</h1>
              <img
                style={{ width: "-webkit-fill-available", maxHeight: "400px" }}
                src="speaking.png"
                alt="community"
              />
            </div>
            <p>
              📌 Присоединяйся к нашему сообществу любителей сиба-ину!
              <br />
              <br />
              📌 Находите единомышленников и создавайте крепкие дружеские связи
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </LayoutPage>
  );
}

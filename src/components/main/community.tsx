import stls from "~styles/components/Main.module.sass";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { LayoutPage } from "~components/general/layout-page";
import { IconPawButton } from "~assets/icons/IconPawButton";
import Footer from "~components/footer/footer";
import { Path } from "~routes/index";

export default function Community() {
  const navigate = useNavigate();
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
                style={{
                  width: "-webkit-fill-available",
                  maxHeight: "280px",
                  maxWidth: "450px",
                }}
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
          <div className={stls.mainContainer}>
            <Button
              style={{
                position: "relative",
                margin: "60px 0 0 0",
                float: "right",
              }}
              onClick={() => navigate(Path.Auth)}
              className={stls.button}
            >
              ПРИСОЕДИНИТЬСЯ <IconPawButton />
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </LayoutPage>
  );
}

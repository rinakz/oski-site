import { Typography } from "@mui/material";
import { LayoutPage } from "./general/LayoutPage";
import useWindowSize from "../hooks/useWindowSize";
import { useState, useEffect } from "react";
import stls from "./styles/components/Service.module.sass";
import { IconOskiPhoto } from "../icons/IconOskiPhoto";
import { IconOskiFilm } from "../icons/IconOskiFilm";
import { IconOskiLife } from "../icons/IconOskiLife";

function Service() {
  const { width, height } = useWindowSize();

  const [mobile, setMobile] = useState(false);
  const [laptop, setLaptop] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  useEffect(() => {
    setLaptop(width < 900);
  }, [width]);

  return (
    <LayoutPage style={{ maxHeight: "fit-content" }}>
      <div className={stls.serviceContainer}>
        <div className={stls.titleContainer}>
          <div className={stls.elips} />
          <h1>Сервисы</h1>
        </div>
        <div className={stls.cardContainer}>
          <div className={stls.card}>
            <div className={stls.cardPhoto}>
              <IconOskiPhoto />
            </div>
            <div
              className={stls.cardInfo}
              style={{
                paddingTop: "20px",
              }}
            >
              <Typography className={stls.title} variant="h5">
                Модель <br /> для фотосессий
              </Typography>
              <Typography className={stls.text} color="#666" variant="body1">
                Участие Оски в ваших фото и видеосъемках
              </Typography>
            </div>
          </div>
          <div className={stls.card}>
            <div className={stls.cardFilm}>
              <IconOskiFilm />
            </div>
            <div className={stls.cardInfo}>
              <Typography className={stls.title} variant="h5">
                Съемка фильма <br /> и рекламы
              </Typography>
              <Typography className={stls.text} color="#666" variant="body1">
                Участие Оски в съемки фильмов и рекламы как реквизит и актер
              </Typography>
            </div>
          </div>
          <div className={stls.card}>
            <div className={stls.cardFamily}>
              <IconOskiLife />
            </div>
            <div className={stls.cardInfo}>
              <Typography className={stls.title} variant="h5">
                Аренда: участие Оски <br /> в жизни вашей семьи
              </Typography>
              <Typography className={stls.text} color="#666" variant="body1">
                Участие Оски в жизни вашей семьи. Знакомство с детьми, прогулки
                и игры
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export default Service;

import { Typography } from "@mui/material";
import { LayoutPage } from "./general/LayoutPage";
import useWindowSize from "../hooks/useWindowSize";
import { useState, useEffect } from "react";

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
    <LayoutPage bg="#f5f4ee">
      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
      <img src="/OskiMain.webp" width={ mobile || laptop ? "300px" : 'auto'} />

      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: mobile ? "20px" : "40px" }}>
        <Typography variant={mobile ? "h5" : "h2"}>Сервисы</Typography>
        <div style={{ display: "flex", flexDirection: "column", gap: mobile ? "10px" : "20px" }}>
          <Typography variant="h5">Модель для фотосессий</Typography>
          <Typography color="#666" variant="body1">
            Участие Оски в ваших фото и видеосъемках
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: mobile ? "10px" : "20px" }}>
          <Typography variant="h5">Съемка фильма и рекламы</Typography>
          <Typography color="#666" variant="body1">
            Участие Оски в съемки фильмов и рекламы как реквизит и актер
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: mobile ? "10px" : "20px" }}>
          <Typography variant="h5">Аренда</Typography>
          <Typography color="#666" variant="body1">
            Участие Оски в жизни вашей семьи. Знакомство с детьми, прогулки и
            игры
          </Typography>
        </div>
      </div>
    </LayoutPage>
  );
}

export default Service;

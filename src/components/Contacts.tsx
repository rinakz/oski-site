import { Link, Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import Maps from "./Maps";
import { useState, useEffect } from "react";
import { LayoutPage } from "./general/LayoutPage";
import useWindowSize from "../hooks/useWindowSize";

function Contacts() {
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
    <LayoutPage bg="#f5f4ee" column propHeight="fit-content">
      <div style={{ display: "flex", gap: "40px", flexWrap: 'wrap' }}>
        <img style={{ width: laptop || mobile ? '-webkit-fill-available' : "500px" }} src="/Funny.jpg" />
        <div style={{ display: "flex", flexDirection: "column", gap: mobile ? "20px" : "40px" }}>
          <Typography sx={{ color: "#ee6a5b" }} variant={mobile ? "h4" : "h3"}>
            Мои контакты
          </Typography>

          <div
            style={{ display: "flex", flexDirection: "column", gap: mobile ? "10px" : "20px" }}
          >
            <Typography variant="h5">Телефон</Typography>
            <Typography color="#666" variant="body1">
              +7 (966) 006-05-96
            </Typography>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: mobile ? "10px" : "20px" }}
          >
            <Typography variant="h5">E-mail</Typography>
            <Typography color="#666" variant="body1">
              reena@myrambler.ru
            </Typography>
          </div>
          <Link underline="none" color="inherit" href="https://t.me/reenakz ">
            <TelegramIcon sx={{ cursor: "pointer" }} />
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", gap: "40px" }}>
        <Maps />
      </div>
    </LayoutPage>
  );
}

export default Contacts;

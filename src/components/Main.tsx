import { Typography, Button } from "@mui/material";
import Contacts from "./Contacts";
import Service from "./Service";
import Photos from "./Photo";
import { LayoutPage } from "./general/LayoutPage";
import useWindowSize from "../hooks/useWindowSize";
import { useState, useEffect } from "react";

function Main() {
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
    <>
      <LayoutPage bg="#efefdc">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              display: "flex",
              justifyContent: "center",
              fontSize: mobile ? "54px" : "78px",
            }}
          >
            OSKI SAGARIME KAZOKU
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#515151",
              display: { xs: "none", sm: "block" },
            }}
          >
            Твой лучший друг :)
          </Typography>
          <Button
            sx={{
              background: "#ee6a5b",
              padding: "15px 40px",
              color: "white",
              borderRadius: "50px",
              width: "fit-content",
            }}
          >
            ПОЗНАКОМИТЬСЯ
          </Button>
        </div>
        <div
          style={{
            borderRadius: "40px",
            display: "flex",
            alignItems: "end",
            width: '100%',
            justifyContent: 'flex-end'
          }}
        >
          <img
            style={{
              width: mobile ? "200px" : "350px",
            }}
            src="/OskiHeader.webp"
          />
        </div>
      </LayoutPage>
      <Service />
      <Photos />
      <Contacts />
    </>
  );
}

export default Main;

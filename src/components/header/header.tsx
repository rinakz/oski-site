import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import stls from "~styles/components/Header.module.sass";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { IconSibkaHeader } from "~assets/icons/IconSibkaHeader";
import { IconPlacemark } from "~assets/icons/IconPlacemark";
import { IconProfile } from "~assets/icons/IconProfile";
import { Path } from "~routes/index";

export function Header() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={stls.header}>
      <AppBar
        className={scroll ? stls.appbarScroll : stls.appbar}
        component="nav"
      >
        <Toolbar className={stls.toolbar}>
          <div
            onClick={() => navigate(Path.Home)}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <IconSibkaHeader />
            <h1 style={{ fontSize: "46px" }}>SIBINATOR</h1>
          </div>

          <Box sx={{ display: { sm: "block" } }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={stls.buttonProfile}
                onClick={() => navigate(Path.Profile)}
              >
                <IconProfile isHovered={isHovered} />
              </div>
              <div
                className={stls.buttonPhone}
                onClick={() => navigate(Path.Map)}
              >
                <IconPlacemark />
              </div>
              {/* <div className={stls.buttonPhone}>
                <a color="inherit" href="tel:+79660060596">
                  <IconPhoneButton />
                </a>
              </div> */}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import { IconSibkaHeader } from "../icons/IconSibkaHeader";
import stls from "./styles/components/Header.module.sass";
import { useNavigate } from "react-router-dom";
import { IconPlacemark } from "../icons/IconPlacemark";
import { PATH } from "../routes/PATH";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className={stls.header}>
      <AppBar className={stls.appbar} component="nav">
        <Toolbar className={stls.toolbar}>
          <div
            onClick={() => navigate(PATH.Home)}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <IconSibkaHeader />
            <h1 style={{ fontSize: "46px" }}>SIBINATOR</h1>
          </div>

          <Box sx={{ display: { sm: "block" } }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <div
                className={stls.buttonPhone}
                onClick={() => navigate(PATH.Map)}
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

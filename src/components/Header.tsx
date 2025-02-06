import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import { IconSibkaHeader } from "../icons/IconSibkaHeader";
import { IconPhoneButton } from "../icons/IconPhoneButton";
import stls from "./styles/components/Header.module.sass";

export function Header() {
  return (
    <div className={stls.header}>
      <AppBar className={stls.appbar} component="nav">
        <Toolbar className={stls.toolbar}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconSibkaHeader />
            <h1 style={{ fontSize: "60px" }}>OSKI</h1>
          </div>

          <Box sx={{ display: { sm: "block" } }}>
            <div className={stls.buttonPhone}>
              <a color="inherit" href="tel:+79660060596">
                <IconPhoneButton />
              </a>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

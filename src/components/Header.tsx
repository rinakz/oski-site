import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Toolbar, Typography } from "@mui/material";

export function Header() {
  const navigate = useNavigate();

  console.log(window.location);

  const navItemsPage = [
    { id: 1, name: "Сервис", link: "#service" },
    { id: 2, name: "Обо мне", link: "#aboutme" },
    { id: 3, name: "Фото", link: "#photo" },
    { id: 4, name: "Контакты", link: "#contacts" },
  ];

  return (
    <AppBar sx={{position: 'static', background: 'white'}} component="nav">
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, color: 'black', display: { xs: "none", sm: "block" } }}
        >
          OSKI
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItemsPage.map((item: any) => (
            <a key={item.id} href={item.link ? `../${item.link}` : ""}>
              <Button sx={{color: 'black'}}>{item.name}</Button>
            </a>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

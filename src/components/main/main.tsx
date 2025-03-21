import { Button } from "@mui/material";
import { IconPawButton } from "../../icons/IconPawButton";
import stls from "../styles/components/Main.module.sass";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/PATH";
import Friends from "./friends";
import Coffee from "./cofee";
import Community from "./community";
import { Stories } from "./stories";

function Main() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <div className={stls.mainContainer}>
        <Stories />
        <Button onClick={() => navigate(PATH.Auth)} className={stls.button}>
          ПРИСОЕДИНИТЬСЯ <IconPawButton />
        </Button>
      </div>
      <Friends />
      <Coffee />
      <Community />
    </div>
  );
}

export default Main;

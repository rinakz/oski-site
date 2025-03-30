import stls from "~styles/components/Main.module.sass";
import { useNavigate } from "react-router";
import Friends from "./friends";
import Coffee from "./cofee";
import Community from "./community";
import { Stories } from "./stories";
import { IconPawButton } from "../../assets/icons/IconPawButton";
import { PATH } from "../../constants/path";
import { Button } from "../../ui/button/button";

function Main() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        height: "100%",
      }}
    >
      <div className={stls.mainContainer}>
        <Stories />
      </div>
      <Friends />
      <Coffee />
      <Community />
    </div>
  );
}

export default Main;

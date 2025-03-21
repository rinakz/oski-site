import { Button } from "@mui/material";
import { LayoutPage } from "./general/LayoutPage";
import { IconOskiMain } from "../icons/IconOskiMain";
import { IconPawMain } from "../icons/IconPawMain";
import { IconPawButton } from "../icons/IconPawButton";
import stls from "./styles/components/Main.module.sass";
import { IconPawImageMain } from "../icons/IconPawImageMain";
import { useNavigate } from "react-router-dom";
import { PATH } from "../routes/PATH";

function Main() {
  const navigate = useNavigate()

  return (
    <>
      <LayoutPage>
        <div className={stls.mainContainer}>
          <div className={stls.naming}>
            <div>
              <div style={{ display: "flex", alignItems: 'center', gap: "12px" }}>
                <h1 className={stls.mainText}>OSKI</h1>
                <IconOskiMain />
              </div>
              <div style={{ display: "flex", alignItems: 'center', gap: "12px" }}>
                <IconPawMain />
                <h1 className={stls.mainText}>SAGARIME </h1>
              </div>
              <div>
                <h1 className={stls.mainText}>KAZOKU</h1>
              </div>
            </div>

            <h2 className={stls.friend}>Твой сосед :)</h2>
              <Button onClick={() => navigate(PATH.Auth)} className={stls.button}>
                ПРИСОЕДИНИТЬСЯ <IconPawButton />
              </Button>
          </div>
          <div className={stls.iconsContainer}>
            <div className={stls.iconFirst}>
              <img src="/first-main.png" alt="first-main"/>
            </div>
            <div className={stls.iconSecond}>
              <img src="/second-main.png" alt="second-main" />
              <IconPawImageMain />
            </div>
          </div>
        </div>
      </LayoutPage>
    </>
  );
}

export default Main;

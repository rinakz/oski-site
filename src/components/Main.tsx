import { Button } from "@mui/material";
import Contacts from "./Contacts";
import Service from "./Service";
import Photos from "./Photo";
import { LayoutPage } from "./general/LayoutPage";
import { IconOskiMain } from "../icons/IconOskiMain";
import { IconPawMain } from "../icons/IconPawMain";
import { IconPawButton } from "../icons/IconPawButton";
import stls from "./styles/components/Main.module.sass";
import { IconImageMain } from "../icons/IconImageMain";
import { IconImageMainSecons } from "../icons/IconImageMainSecons";
import { IconPawImageMain } from "../icons/IconPawImageMain";

function Main() {
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

            <h2 className={stls.friend}>Твой лучший друг :)</h2>
            <a href="#contacts">
              <Button className={stls.button}>
                ПОЗНАКОМИТЬСЯ <IconPawButton />
              </Button>
            </a>
          </div>
          <div className={stls.iconsContainer}>
            <IconImageMain />
            <div className={stls.iconSecond}>
              <IconImageMainSecons />
              <IconPawImageMain />
            </div>
          </div>
        </div>
      </LayoutPage>
      <Service />
      <Photos />
      <Contacts />
    </>
  );
}

export default Main;

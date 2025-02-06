import * as React from "react";
import { LayoutPage } from "./general/LayoutPage";
import stls from "./styles/components/Photo.module.sass";
import Slider from "./Carousel";

export default function Photos() {
  return (
    <LayoutPage column style={{justifyContent: 'space-evenly'}} >
      <div className={stls.titleContainer}>
        <div className={stls.elips} />
        <h1>мой фотоальбом</h1>
      </div>

      <Slider />
    </LayoutPage>
  );
}

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";

export const FourthStep = () => {
  const [coord, setCoord] = useState([55.754621, 37.618401]);

  function onActionTickComplete(e: any) {
    const projection = e.get("target").options.get("projection");
    const { globalPixelCenter, zoom } = e.get("tick");
    setCoord(projection.fromGlobalPixels(globalPixelCenter, zoom));
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>геолокация</div>
      <YMaps>
        <Map
          onActionTickComplete={onActionTickComplete}
          width="100%"
          modules={["control.ZoomControl"]}
          defaultState={{
            center: coord,
            zoom: 10,
            controls: ["zoomControl"],
          }}
        >
          <Placemark geometry={coord} />
        </Map>
      </YMaps>
    </div>
  );
};

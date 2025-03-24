import { Button } from "@mui/material";
import { YMaps, Map, Placemark, SearchControl } from "@pbe/react-yandex-maps";
import { FC, useState } from "react";
import { IconPawButton } from "../../assets/icons/IconPawButton";
import stls from "~styles/components/Auth.module.sass";
import { Control, Controller } from "react-hook-form";
import { AuthFormType } from "./types";

interface FourthStep {
  control: Control<AuthFormType>;
  setActiveStep: (value: number) => void;
}

export const FourthStep: FC<FourthStep> = ({ control, setActiveStep }) => {
  const [coordinates, setCoordinates] = useState([55.75, 37.57]); // Начальные координаты

  function onActionTickComplete(e: any) {
    const projection = e.get("target").options.get("projection");
    const { globalPixelCenter, zoom } = e.get("tick");
    setCoordinates(projection.fromGlobalPixels(globalPixelCenter, zoom));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          background: "#FFFCF5",
          borderRadius: "12px",
          padding: "24px",
          height: "100%",
        }}
      >
        <div className={stls.fieldContainer}>выставьте свою метку на карте</div>
        <YMaps query={{ apikey: "8c4bcb7f-e5cd-4ecc-b94c-e669d323affe" }}>
          <Map
            onActionTickComplete={onActionTickComplete}
            modules={["control.ZoomControl"]}
            defaultState={{
              center: coordinates,
              zoom: 10,
              controls: ["zoomControl"],
            }}
            width="100%"
          >
            <SearchControl options={{ float: "right", noPlacemark: true }} />

            <Placemark
              geometry={coordinates}
              modules={["geoObject.addon.balloon"]}
              options={{
                iconLayout: "default#image",
                iconImageHref: "sibka.png",
                iconImageSize: [42, 42],
              }}
            />
          </Map>
        </YMaps>
      </div>

      <div className={stls.buttonContainer}>
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <Button
              onClick={() => {
                field.onChange(coordinates);
                setActiveStep(4);
              }}
              className={stls.button}
            >
              Завершить <IconPawButton />
            </Button>
          )}
        />
      </div>
    </div>
  );
};

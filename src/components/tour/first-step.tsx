import { FC } from "react";
import { IconButton } from "../../ui/icon-button/icon-button";
import { IconRight } from "../../assets/icons/IconRight";

interface FirstStep {
  setActiveStep: (value: number) => void;
}
export const FirstStep: FC<FirstStep> = ({ setActiveStep }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px 20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#FFFCF5",
              borderRadius: "50%",
            }}
          >
            <img style={{ width: 44, height: 44 }} src="sibka.png" />
          </div>
          <IconButton size="large" variant="secondary" icon={<IconRight />} />
        </div>
        <span style={{ fontSize: "25px" }}>
          Найди друзей <br />
          для <b>своего сиба-ину</b>
        </span>
        <span style={{ color: "#65635E", fontSize: "14px" }}>
          Добавь своего сиба-ину на карту, найди других для общения и совместных
          прогулок
        </span>
      </div>
    </div>
  );
};

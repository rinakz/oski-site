import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { IconRight } from "../../assets/icons/IconRight";
import stls from "~styles/components/Auth.module.sass";
import { AuthFormType } from "./types";

interface FirstStep {
  control: Control<AuthFormType>;
  setActiveStep: (value: number) => void;
}

export const FirstStep: FC<FirstStep> = ({ control, setActiveStep }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
        <div className={stls.fieldContainer}>
          кличка
          <Controller
            control={control}
            name="sibaname"
            render={({ field }) => (
              <input onChange={(e) => field.onChange(e)} value={field.value} />
            )}
          />
        </div>

        <div className={stls.fieldContainer}>
          гендер
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <div style={{ display: "flex", gap: "12px" }}>
                <MaleIcon
                  sx={{
                    cursor: "pointer",
                    width: "60px",
                    height: "60px",
                    fill: field.value === "male" ? "#5279C9" : "#C6D3ED",
                  }}
                  onClick={() => field.onChange("male")}
                />
                <FemaleIcon
                  sx={{
                    cursor: "pointer",
                    width: "60px",
                    height: "60px",
                    fill: field.value === "female" ? "#FF644E" : "#F6BDB5",
                  }}
                  onClick={() => field.onChange("female")}
                />
              </div>
            )}
          />
        </div>
        <div className={stls.fieldContainer}>
          иконка на карте
          <Controller
            control={control}
            name="icon"
            render={({ field }) => (
              <div style={{ display: "flex", gap: "12px", cursor: "pointer" }}>
                <img
                  style={{
                    border:
                      field.value === "default" ? "4px solid #8BC87F" : "none",
                  }}
                  onClick={() => field.onChange("default")}
                  src="/sibka.png"
                  alt="default"
                  width={60}
                  height={60}
                />
                <img
                  style={{
                    border:
                      field.value === "white" ? "4px solid #8BC87F" : "none",
                  }}
                  onClick={() => field.onChange("white")}
                  src="/sibka-wht.png"
                  alt="white"
                  width={60}
                  height={60}
                />
                <img
                  style={{
                    border:
                      field.value === "black" ? "4px solid #8BC87F" : "none",
                  }}
                  onClick={() => field.onChange("black")}
                  src="/sibka-blk.png"
                  alt="black"
                  width={60}
                  height={60}
                />
              </div>
            )}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          cursor: "pointer",
        }}
      >
        <div onClick={() => setActiveStep(1)}>
          <IconRight />
        </div>
      </div>
    </div>
  );
};

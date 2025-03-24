import { Checkbox } from "@mui/material";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { IconRight } from "../../assets/icons/IconRight";
import stls from "~styles/components/Auth.module.sass";
import { AuthFormType } from "./types";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface ThirdStep {
  control: Control<AuthFormType>;
  setActiveStep: (value: number) => void;
}

export const ThirdStep: FC<ThirdStep> = ({ control, setActiveStep }) => {
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
        <div style={{ display: "flex", gap: "12px" }}>
          <div className={stls.fieldContainer}>
            имя пользователя в телеграмм
            <Controller
              control={control}
              name="tgname"
              render={({ field }) => (
                <input
                  onChange={(e) => field.onChange(e)}
                  value={field.value.name}
                />
              )}
            />
          </div>
        </div>
        <div className={stls.fieldContainer}>
          показывать имя
          <Controller
            control={control}
            name="tgname"
            render={({ field }) => (
              <Checkbox
                {...label}
                value={field.value.show}
                checked={field.value.show}
                onChange={(e) => field.onChange(e)}
                color="default"
              />
            )}
          />
        </div>
        <div className={stls.fieldContainer}>
          чат в телеграмм
          <Controller
            control={control}
            name="chat"
            render={({ field }) => (
              <input onChange={(e) => field.onChange(e)} value={field.value} />
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
        <div onClick={() => setActiveStep(3)}>
          <IconRight />
        </div>
      </div>
    </div>
  );
};

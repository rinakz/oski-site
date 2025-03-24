import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { IconRight } from "../../assets/icons/IconRight";
import stls from "~styles/components/Auth.module.sass";
import { AuthFormType } from "./types";

interface SecondStep {
  control: Control<AuthFormType>;
  setActiveStep: (value: number) => void;
}

export const SecondStep: FC<SecondStep> = ({ control, setActiveStep }) => {
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
        <div className={stls.fieldContainer}>
          никнейм
          <Controller
            control={control}
            name="nickname"
            render={({ field }) => (
              <input onChange={(e) => field.onChange(e)} value={field.value} />
            )}
          />
        </div>
        <div className={stls.fieldContainer}>
          e-mail
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <input onChange={(e) => field.onChange(e)} value={field.value} />
            )}
          />
        </div>
        <div className={stls.fieldContainer}>
          пароль
          <Controller
            control={control}
            name="password"
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
        <div onClick={() => setActiveStep(2)}>
          <IconRight />
        </div>
      </div>
    </div>
  );
};

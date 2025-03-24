import { FC } from "react";
import { Controller } from "react-hook-form";

interface SecondStep {
  control: any;
}

export const SecondStep: FC<SecondStep> = ({ control }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        никнейм
        <Controller
          control={control}
          name="nickname"
          render={({ field }) => (
            <input onChange={(e) => field.onChange(e)} value={field.value} />
          )}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        e-mail
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <input onChange={(e) => field.onChange(e)} value={field.value} />
          )}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
  );
};

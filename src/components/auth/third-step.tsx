import { Checkbox } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface ThirdStep {
  control: any;
}

export const ThirdStep: FC<ThirdStep> = ({ control }) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "12px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span>Показывать имя</span>
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
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
  );
};

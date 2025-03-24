import { FC } from "react";
import { Controller } from "react-hook-form";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface FirstStep {
  control: any;
}

export const FirstStep: FC<FirstStep> = ({ control }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        имя питомца
        <Controller
          control={control}
          name="sibaname"
          render={({ field }) => (
            <input onChange={(e) => field.onChange(e)} value={field.value} />
          )}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>гендер</span>
        <Controller
          control={control}
          name="icon"
          render={({ field }) => (
            <div style={{ display: "flex", gap: "12px" }}>
              <img
                style={{
                  border:
                    field.value === "default" ? "1px solid green" : "none",
                }}
                onClick={() => field.onChange("default")}
                src="/sibka.png"
                alt="default"
                width={60}
                height={60}
              />
              <img
                style={{
                  border: field.value === "white" ? "1px solid green" : "none",
                }}
                onClick={() => field.onChange("white")}
                src="/sibka-wht.png"
                alt="white"
                width={60}
                height={60}
              />
            </div>
          )}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>иконка на карте</span>
        <Controller
          control={control}
          name="icon"
          render={({ field }) => (
            <div style={{ display: "flex", gap: "12px" }}>
              <img
                style={{
                  border:
                    field.value === "default" ? "1px solid green" : "none",
                }}
                onClick={() => field.onChange("default")}
                src="/sibka.png"
                alt="default"
                width={60}
                height={60}
              />
              <img
                style={{
                  border: field.value === "white" ? "1px solid green" : "none",
                }}
                onClick={() => field.onChange("white")}
                src="/sibka-wht.png"
                alt="white"
                width={60}
                height={60}
              />
              <img
                style={{
                  border: field.value === "black" ? "1px solid green" : "none",
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
  );
};

import { Checkbox } from "@mui/material";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { IconRight } from "../../assets/icons/IconRight";
import { AuthFormType } from "./types";
import { Button, Input } from "../../ui";
import { IconButton } from "../../ui/icon-button/icon-button";
import { IconPawButton } from "../../assets/icons/IconPawButton";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface ThirdStep {
  control: Control<AuthFormType>;
  setActiveStep: (value: number) => void;
}

export const ThirdStep: FC<ThirdStep> = ({ control, setActiveStep }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        gap: "40px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Controller
            control={control}
            name="tgname"
            render={({ field }) => (
              <Input
                label="Имя пользователя в телеграм"
                onChange={(e) => field.onChange(e)}
                value={field.value.name}
                placeholder="Введите ваш никнейм в телеграм"
              />
            )}
          />
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
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
            <span style={{ fontSize: "14px" }}>Показывать имя</span>
          </div>
        </div>
        <Controller
          control={control}
          name="chat"
          render={({ field }) => (
            <Input
              label="Чат в телеграм"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              placeholder="Укажите чат в телеграм"
              description="Укажите чат, в котором Вас смогут найти другие пользователи, если не хотите, чтобы с Вами связывались через личные сообщения"
            />
          )}
        />
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <IconButton
          onClick={() => setActiveStep(2)}
          variant="secondary"
          size="large"
          icon={
            <span style={{ display: "flex", transform: "rotate(-180deg)" }}>
              <IconRight />
            </span>
          }
        />
        <Button
          style={{ width: "100%" }}
          iconRight={<IconPawButton />}
          size="large"
        >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

import { useForm } from "react-hook-form";
import { AuthFormType } from "./types";

import { LayoutPage } from "../general/layout-page";
import { FirstStep } from "./first-step";
import { SecondStep } from "./second-step";
import { ThirdStep } from "./third-step";
import { FourthStep } from "./fourth-step";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Auth = () => {
  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    clearErrors,
  } = useForm<AuthFormType>({
    mode: "onSubmit",
    defaultValues: {
      nickname: "",
      password: "",
      tgname: { name: "", show: true },
      chat: "",
      sibaname: "",
      icon: "default",
      location: "",
    },
  });
  return (
    <LayoutPage>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          marginTop: "112px",
        }}
      >
        <FirstStep control={control} />
        <SecondStep control={control} />
        <ThirdStep control={control} />
        <FourthStep />
      </form>
    </LayoutPage>
  );
};

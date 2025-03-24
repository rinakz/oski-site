import { useForm } from "react-hook-form";
import { AuthFormType } from "./types";

import { LayoutPage } from "../general/layout-page";
import { FirstStep } from "./first-step";
import { SecondStep } from "./second-step";
import { ThirdStep } from "./third-step";
import { FourthStep } from "./fourth-step";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useEffect, useState } from "react";
import stls from "~styles/components/Auth.module.sass";
import useWindowSize from "../../hooks/use-window-size";

const steps = [
  "Регистрация питомца",
  "Регистрация владельца",
  "Способ связи",
  "Метка на карте",
];

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
      gender: "male",
      email: ''
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const { width } = useWindowSize();

  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    setTablet(width < 1000);
  }, [width]);

  return (
    <LayoutPage>
      <div className={stls.formContainer}>
        <Box className={stls.stepperContainer}>
          <Stepper alternativeLabel>
            {steps.map((label, idx) => (
              <Step
                style={{
                  display: idx === activeStep || !tablet ? "block" : "none",
                }}
                key={label}
              >
                <StepLabel>
                  <h1 style={{ fontSize: "24px" }}>{label}</h1>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            height: "100%",
          }}
        >
          {activeStep === 0 && (
            <FirstStep control={control} setActiveStep={setActiveStep} />
          )}
          {activeStep === 1 && (
            <SecondStep control={control} setActiveStep={setActiveStep} />
          )}
          {activeStep === 2 && (
            <ThirdStep control={control} setActiveStep={setActiveStep} />
          )}
          {activeStep === 3 && (
            <FourthStep control={control} setActiveStep={setActiveStep} />
          )}
        </form>
      </div>
    </LayoutPage>
  );
};

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import useWindowSize from "../hooks/useWindowSize";
import { useState, useEffect } from "react";
import { LayoutPage } from "./general/LayoutPage";

const images = [
  {
    label:
      "Родился я 20 апреля 2023 года в семье Японских чемпионов. Моя мама Айкэн Сагаримэ Сачико, а папа Кирей Казоку Дайон",
    imgPath: "/OskiSmall.jpg",
  },
  //   {
  //     label:
  //       "Уже с самого детства я люблю посещать общественные места и находиться среди большого количества людей",
  //     imgPath: "/Loko.jpg",
  //   },
  //   {
  //     label: "Я очень красивый и любопытный :)",
  //     imgPath:
  //       "/Metall.jpg",
  //   },
  {
    label:
      "С самого детства я люблю посещать общественные места и находиться среди людей. Мне всего год, а я уже известный!",
    imgPath: "/MetallSupporters.jpg",
  },
  {
    label: "Я очень выносливый и безумно люблю путешествия",
    imgPath: "/OskiTver.jpg",
  },
  {
    label: "Люблю поваляться в песке и позировать",
    imgPath: "/Mytischi.jpg",
  },
  //   {
  //     label: "И они меня любят",
  //     imgPath:
  //       "/OskiFace.jpg",
  //   },
  {
    label: "А еще я очень смешной :)",
    imgPath: "/Smile.jpg",
  },
];

export default function Photos() {
  const theme = useTheme();
  const { width, height } = useWindowSize();

  const [mobile, setMobile] = useState(false);
  const [laptop, setLaptop] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  useEffect(() => {
    setLaptop(width < 900);
  }, [width]);

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <LayoutPage bg="#efefdc" column propHeight="100vh" style={{alignItems: 'center'}}>
      <Typography component="div" variant={mobile ? "h4" : "h2"}>
        Моя фотогалерея
      </Typography>

      <Box sx={{ flexGrow: 1, maxWidth: laptop || mobile ? '-webkit-fill-available' : "800px" }}>
        <Paper
          square
          elevation={0}
          sx={{
            background: "transparent",
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            padding: "12px",
            justifyContent: "center",
            height: mobile ? '100px' : '50px'

          }}
        >
          <Typography variant="body1" color="#666">
            {images[activeStep].label}
          </Typography>
        </Paper>
        <div style={{ display: "flex", justifyContent: "center", height: '420px' }}>
          <Box
            component="img"
            sx={{
              display: "block",
              overflow: "hidden",
              maxWidth: mobile ? "60vh" : "700px",
              height: mobile ? 'fit-content' : "420px",
            }}
            src={images[activeStep].imgPath}
          />
        </div>
        <MobileStepper
          sx={{ background: "transparent" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{ color: "#666" }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              sx={{ color: "#666" }}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </LayoutPage>
  );
}

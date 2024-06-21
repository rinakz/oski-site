import useWindowSize from "../../hooks/useWindowSize";
import { useState, useEffect } from "react";
import stls from "../styles/components/LayoutPage.module.sass";

type TypeLayoutPageProps = {
  children: any;
  classNames?: any;
  column?: boolean;
  style?: any;
};

export function LayoutPage({ children, column, style }: TypeLayoutPageProps) {
  const { width, height } = useWindowSize();

  const [mobile, setMobile] = useState(false);
  const [laptop, setLaptop] = useState(false);

  useEffect(() => {
    setMobile(width < 500);
  }, [width]);

  useEffect(() => {
    setLaptop(width < 900);
  }, [width]);

  return (
    <div
      className={stls.container}
      style={{
        ...style,
        display: "flex",
        flexWrap: laptop && !column ? "wrap" : "nowrap",
        flexDirection: column ? "column" : "row",
      }}
    >
      {children}
    </div>
  );
}

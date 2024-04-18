import useWindowSize from "../../hooks/useWindowSize";
import { useState, useEffect } from "react";

type TypeLayoutPageProps = {
  children: any;
  classNames?: any;
  bg?: string;
  column?: boolean,
  style?: any
  propHeight?: string
};

export function LayoutPage({ children, bg, column, style, propHeight }: TypeLayoutPageProps) {
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
      style={{...style, 
        display: "flex",
        background: bg,
        height: mobile || laptop ? propHeight ? propHeight : "fit-content" : propHeight || "90vh",
        padding: mobile ? "20px" : "40px 80px",
        flexWrap: laptop && !column ? 'wrap' : 'nowrap', 
        gap: mobile ? '20px' : '40px',
        flexDirection: column ? 'column' : 'row'
      }}
    >
      {children}
    </div>
  );
}

import stls from "~styles/components/Main.module.sass";
import Friends from "./friends";
import Coffee from "./cofee";
import Community from "./community";
import { Stories } from "./stories";
import { Tour } from "../tour";

function Main() {
  const isAuthUser = undefined;

  return (
    <>
      {isAuthUser ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            height: "100%",
          }}
        >
          <div className={stls.mainContainer}>
            <Stories />
          </div>
          <Friends />
          <Coffee />
          <Community />
        </div>
      ) : (
        <Tour />
      )}
    </>
  );
}

export default Main;

import { LayoutPage } from "../general/LayoutPage";
import Footer from "../Footer";
import stls from "../styles/components/Main.module.sass";

export default function Community() {
  return (
    <LayoutPage>
      <div
        style={{
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ width: "initial", height: "-webkit-fill-available" }}
          className={stls.servicesContainer}
        >
          <div>
            <div className={stls.serviceTitle}>
              <h1>Все сибы на одной карте!</h1>
              <img width="300px" src="speaking.png" alt="community" />
            </div>
            <p>
              📌 Присоединяйся к нашему сообществу любителей сиба-ину!
              <br />
              <br />
              📌 Находите единомышленников и создавайте крепкие дружеские связи
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </LayoutPage>
  );
}

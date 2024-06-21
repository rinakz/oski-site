import { IconContact } from "../icons/IconContact";
import { IconPawImageMain } from "../icons/IconPawImageMain";
import { IconWelcome } from "../icons/IconWelcome";
import Maps from "./Maps";
import { LayoutPage } from "./general/LayoutPage";
import stls from "./styles/components/Contact.module.sass";

function Contacts() {
  return (
    <LayoutPage style={{justifyContent: 'space-between'}} column>
      <div id="contacts" className={stls.contactContainer}>
        <div className={stls.titleContainer}>
          <div className={stls.elips} />
          <h1>контакты</h1>
        </div>
        <div className={stls.iconsContainer}>
          <div className={stls.iconWelcome}>
            <IconWelcome />
          </div>

          <div className={stls.info}>
            <IconContact />
            <div className={stls.iconPaw}>
              <IconPawImageMain />
            </div>
            
          </div>          

        </div>
        <div style={{ display: "flex" }}>
          <Maps />
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>
          © 2024 Shiba-inu.moscow
        </p>
        <p>г. Москва</p>
        
      </div>
    </LayoutPage>
  );
}

export default Contacts;

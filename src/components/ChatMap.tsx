import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import jsonData from "../address.json";

export default function ChatMap() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "12px",
      }}
    >
      <YMaps>
        <Map
          height="88vh"
          width="100%"
          defaultState={{
            center: [55.924858, 37.755851],
            zoom: 13,
            controls: ["zoomControl"],
          }}
          modules={["control.ZoomControl"]}
        >
          {jsonData.map((el, idx) => (
            <Placemark
              key={idx}
              modules={["geoObject.addon.balloon"]}
              options={{
                iconLayout: "default#image",
                iconImageHref: el.image,
                iconImageSize: [42, 42],
              }}
              {...el}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

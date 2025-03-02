import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Footer from "./Footer";
import stls from "./styles/components/Chat.module.sass";

export default function ChatMap() {
  const placeMarks = [
    {
      image: "/sibka.png",
      geometry: [55.927488, 37.724571],
      properties: {
        balloonContent: "reenakz",
      },
    },
    {
      image: "/sibka.png",
      geometry: [55.912048, 37.752741],
      properties: {
        balloonContent: "Vi_ledi",
      },
    },
    {
      image: "/sibka.png",
      geometry: [55.91254, 37.752407],
      properties: {
        balloonContent: "lindwiora",
      },
    },
    {
      image: "/sibka.png",
      geometry: [55.924589, 37.724189],
      properties: {
        balloonContent: "oh_kudriavceva",
      },
    },
    {
      image: "/sibka.png",
      geometry: [55.928305, 37.724359],
      properties: {
        balloonContent: "yurist1973",
      },
    },
    {
      image: "/sibka.png",
      geometry: [55.923793, 37.727993],
      properties: {
        balloonContent: "Viola",
      },
    },
    {
      image: "/sibka-blk.png",
      geometry: [55.913013, 37.780568],
      properties: {
        balloonContent: "martiny_ice",
      },
    },
    {
      image: "/sibka.png",
      geometry: [55.915533, 37.782476],
      properties: {
        balloonContent: "chinova_olga",
      },
    },
    {
      image: "/sibka-wht.png",
      geometry: [55.928703, 37.730338],
      properties: {
        balloonContent: "AD",
      },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <YMaps>
        <Map
          height="80vh"
          width="100%"
          defaultState={{
            center: [55.924858, 37.755851],
            zoom: 13,
            controls: ["zoomControl"],
          }}
          modules={["control.ZoomControl"]}
        >
          {placeMarks.map((el, idx) => (
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
      <div className={stls.footer}>
        <Footer />
      </div>
    </div>
  );
}

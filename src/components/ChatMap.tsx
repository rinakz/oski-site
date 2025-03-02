import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function ChatMap() {
  const placeMarks = [
    {
      image: "/sibka.png",
      geometry: [55.927488, 37.724571],
      properties: {
        balloonContent: "reenakz",
      },
    },
  ];

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
    </div>
  );
}

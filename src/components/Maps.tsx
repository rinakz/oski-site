import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Maps() {
  return (
    <YMaps>
      <Map
        width="100%"
        defaultState={{ center: [55.927488, 37.724571], zoom: 12 }}
      >
        <Placemark geometry={[55.927488, 37.724571]} />
      </Map>
    </YMaps>
  );
}

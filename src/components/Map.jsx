import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(lat);

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Positions : {lat},{lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 25, lng: 30 })}>
        Change Position
      </button>
    </div>
  );
};

export default Map;

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  const [loading, setLoading] = useState([]);
  let [color, setColor] = useState("#b9b8b8");

  return (
    <ClipLoader
      color={color}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loading;

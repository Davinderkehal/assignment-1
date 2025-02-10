import { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button onClick={() => setIsVisible(!isVisible)} style={{ padding: "10px", backgroundColor: "green", color: "white" }}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <p>Click to increase, decrease, or reset the counter in real time.</p>}
    </div>
  );
}

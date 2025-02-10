import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "10px",
        width: "250px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ marginBottom: "15px", color: "#333" }}>Counter</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>
        {count}
      </p>

      {/* Decrement Button */}
      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)}  // Prevents negative numbers
        style={{
          padding: "10px",
          margin: "5px",
          backgroundColor: count > 0 ? "red" : "#ccc", // Gray out if count is 0
          color: "white",
          border: "none",
          cursor: count > 0 ? "pointer" : "not-allowed", // Disable if count is 0
          fontSize: "16px",
          borderRadius: "5px",
        }}
        disabled={count === 0} // Prevents clicking when count is 0
      >
        -
      </button>

      {/* Reset Button */}
      <button
        onClick={() => setCount(0)}
        style={{
          padding: "10px",
          margin: "5px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          borderRadius: "5px",
        }}
      >
        Reset
      </button>

      {/* Increment Button */}
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px",
          margin: "5px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          borderRadius: "5px",
        }}
      >
        +
      </button>
    </div>
  );
}

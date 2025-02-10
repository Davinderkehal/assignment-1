import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: "10px", marginRight: "10px" }} />
        <button type="submit" style={{ padding: "10px", backgroundColor: "orange", color: "white" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

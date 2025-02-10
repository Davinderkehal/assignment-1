import Navbar from "./components/navbar";

export default function About() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar />
      <h1>About Page</h1>
      <p>Welcome to my web application!</p>

       <p>This project is built using Next.js and React, showcasing modern front-end development practices.</p>
    </div>
  );
}

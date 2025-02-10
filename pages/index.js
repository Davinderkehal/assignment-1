import Navbar from "./components/navbar";
import Counter from "./components/counter";
import Toggle from "./components/toggle";
import Form from "./components/form";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar />
      <h1>This is to My Next.js App for Assignment-1</h1>
      <p>This application demonstrates key React concepts like state management and event handling.</p>
      <Counter />
      <Toggle />
      <Form />
    </div>
  );
}

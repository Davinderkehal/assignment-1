// Import necessary components (ensure correct paths)
import Navbar from " ./components/navbar";
import Counter from " ./components/counter";
import Toggle from " ./components/toggle";
import Form from " ./components/form";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Include the navigation bar */}
      <Navbar />

      {/* Main heading of the application */}
      <h1>This is My Next.js App for Assignment-1</h1>

      {/* Brief description of the project */}
      <p>This application demonstrates key React concepts like state management and event handling.</p>

      {/* Counter component to demonstrate state changes */}
      <Counter />

      {/* Toggle component to show conditional rendering */}
      <Toggle />

      {/* Form component to handle user input */}
      <Form />
    </div>
  );
}

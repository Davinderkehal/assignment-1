// Import the useState hook from React to manage state in functional components
import { useState } from "react";

// Define the Form component
export default function Form() {
  // Declare a state variable `name` and a function `setName` to update it
  // Initialize `name` with an empty string
  const [name, setName] = useState("");

  // Define the `handleSubmit` function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    alert(`Hello, ${name}!`); // Display an alert with the entered name
  };

  // Render the form UI
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Heading for the form */}
      <h2>Enter Your Name</h2>

      {/* Form element with an `onSubmit` event handler */}
      <form onSubmit={handleSubmit}>
        {/* Input field for the user to enter their name */}
        <input
          type="text"
          value={name} // Bind the input value to the `name` state
          onChange={(e) => setName(e.target.value)} // Update `name` state when the input changes
          style={{ padding: "10px", marginRight: "10px" }} // Inline styles for the input
        />

        {/* Submit button for the form */}
        <button
          type="submit"
          style={{ padding: "10px", backgroundColor: "orange", color: "white" }} // Inline styles for the button
        >
          Submit
        </button>
      </form>
    </div>
  );
}
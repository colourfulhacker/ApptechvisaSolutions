import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure the root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Create root and render app with error handling
try {
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  // Fallback rendering
  rootElement.innerHTML = `
    <div style="
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      color: #000000;
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 2rem;
    ">
      <div>
        <h1 style="color: #ff6b35; margin-bottom: 1rem;">Apptechvisa Solutions</h1>
        <p style="margin-bottom: 1rem;">Something went wrong while loading the application.</p>
        <button 
          onclick="window.location.reload()" 
          style="
            background: #ff6b35;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 1rem;
          "
        >
          Reload Page
        </button>
      </div>
    </div>
  `;
}

import { createRoot } from "react-dom/client";
import App from "./App";

const rootContainer = document.getElementById("root");

// kaha show krna hai
const root = createRoot(rootContainer);

// kya show krwana hai

root.render(<App />);



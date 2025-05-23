import "./index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "./context/books";
import App from "./App";
import { AuthProvider } from "./context/Authcontext";

const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <AuthProvider>
      <Provider>
        <App />
      </Provider>
    </AuthProvider>
  );
}

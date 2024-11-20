import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PopupProvider } from "./context/PopupContext";
import { AuthDataProvider } from "./context/AuthData.jsx";
import { ChatsProvider } from "./context/ChatContext.jsx";

createRoot(document.getElementById("root")).render(
  <ChatsProvider>
    <AuthDataProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </AuthDataProvider>
  </ChatsProvider>
);

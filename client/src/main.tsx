import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

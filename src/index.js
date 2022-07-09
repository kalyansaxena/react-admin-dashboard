import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./contexts/darkModeContext";
import { ToggleMenuContextProvider } from "./contexts/toggleContext";

ReactDOM.render(
  <DarkModeContextProvider>
    <ToggleMenuContextProvider>
      <App />
    </ToggleMenuContextProvider>
  </DarkModeContextProvider>,
  document.getElementById("root")
);

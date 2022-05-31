import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SnackbarProvider>
      <UserProvider>
        <App /> 
      </UserProvider>
    </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

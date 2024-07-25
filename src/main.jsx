import React from "react";
import ReactDOM from "react-dom/client";
//React Router Dom
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./app/store";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import { UserProvider } from "./constant/UserDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

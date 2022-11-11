import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import Button from "react-bootstrap/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();

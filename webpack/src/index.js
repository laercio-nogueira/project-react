import * as React from "react";
import { createRoot } from 'react-dom/client';
import Routers from "./routers";
import "./App.scss";

const appRoot = document.getElementById("app")
appRoot.setAttribute('notranslate', true)
createRoot(appRoot)
  .render(<Routers />);
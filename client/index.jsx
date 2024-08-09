import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const initialRender= document.getElementById('app')

const root=createRoot(initialRender)

root.render(<App />)

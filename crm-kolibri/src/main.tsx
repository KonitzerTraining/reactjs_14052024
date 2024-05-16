import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { register } from "@public-ui/components";
import { defineCustomElements } from "@public-ui/components/dist/loader";

// @ts-expect-error
import { DEFAULT } from "@public-ui/themes";
import { BrowserRouter } from 'react-router-dom';

register(DEFAULT, defineCustomElements)
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>

          <App />

      </React.StrictMode>
    );
  })
  .catch(console.warn);
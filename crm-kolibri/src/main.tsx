import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { register } from "@public-ui/components";
import { defineCustomElements } from "@public-ui/components/dist/loader";

// @ts-expect-error
import { ITZBund } from "@public-ui/themes";

register(ITZBund, defineCustomElements)
 .then(() => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
 .catch(console.warn);